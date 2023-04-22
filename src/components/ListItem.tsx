import React, { useEffect, useRef, useCallback, PureComponent, useMemo, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, ToastAndroid, TouchableOpacity, View, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import { Animations } from '../constants/Animations';
import Colors from '../constants/Colors';
import Styles from '../common/Styles';
import { Feather } from '@expo/vector-icons';
import FloatingActionButton from './AddListButton';

const colorAr = [
    '#637aff',
    '#60c5a8',
    '#CCCCCC',
    '#ff5454',
    '#039a83',
    '#dcb834',
    '#8f06e4',
    'skyblue',
    '#ff4c98',
]

class ListItem extends PureComponent {
    static propTypes = {
        item: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        animation: PropTypes.oneOf(Object.keys(Animations)).isRequired,
        navigation: PropTypes.object.isRequired,
        bgColor: PropTypes.func.isRequired,
    };

    render() {
        const { item, index, animation, navigation, bgColor } = this.props;

        return (
            <Animatable.View animation={animation} duration={1000} delay={index * 100}>
                <View style={styles.listItem}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Screen')}>
                        <View style={[styles.image, { backgroundColor: bgColor }]} />
                    </TouchableOpacity>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                </View>
            </Animatable.View>
        );
    }
}

export default function ListItems({ navigation }) {
    const [items, setItems] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
    ]);


    const onAddListItem = (id) => {
        setItems(
            (prevItems) => [...prevItems, { id, name: `Item ${id}` }]
        );
    }

    const viewRef = useRef(null);
    const animation = Animations[1];
    const bgColorRef = useRef(colorAr);
    const data = items;

    const bgColor = useMemo(() => {
        return (index) => bgColorRef.current[index % colorAr.length];
    }, [bgColorRef]);

    const renderItem = useCallback(({ item, index }) => (
        <ListItem item={item} index={index} animation={animation} navigation={navigation} bgColor={bgColor(index)} />
    ), [animation, bgColor, navigation])

    const ListEmptyComponent = () => {
        const anim = {
            0: { translateY: 0 },
            0.5: { translateY: 50 },
            1: { translateY: 0 },
        }
        return (
            <View style={[styles.listEmpty]}>
                <Animatable.Text
                    animation={anim}
                    easing="ease-in-out"
                    duration={3000}
                    style={{ fontSize: 24 }}
                    iterationCount="infinite">
                    Empty List!
                </Animatable.Text>
            </View>
        )
    }

    useEffect(() => {
        const unsubscribe = navigation && navigation.addListener('focus', () => {
            viewRef.current.animate({ 0: { opacity: 0.5, }, 1: { opacity: 1 } });
        });
        return () => unsubscribe;
    }, [navigation])

    return (
        <View style={[Styles.container]}>
            <Animatable.View
                ref={viewRef}
                easing={'ease-in-out'}
                duration={500}
                style={Styles.container}>

                <FloatingActionButton onAddListItem={onAddListItem} />

                <FlatList
                    data={data}
                    keyExtractor={(_, i) => String(i)}
                    numColumns={2}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    ListEmptyComponent={ListEmptyComponent}
                />
            </Animatable.View>
        </View>
    );
}




const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'rgba(0, 0, 0, .08)',
    },
    listEmpty: {
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        height: 200,
        marginLeft: 27,
        marginRight: -4,
        width: Dimensions.get('window').width / 2 - 39,
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 10,
        shadowOpacity: 0.11,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    image: {
        height: 150,
        margin: 5,
        borderRadius: 10,
        backgroundColor: Colors.primary,
    },
    detailsContainer: {
        paddingHorizontal: 16,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
