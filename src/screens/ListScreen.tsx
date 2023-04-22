import React, { useEffect, useRef, useCallback, PureComponent, useMemo } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import { Button, List } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import { Animations } from '../constants/Animations';

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
    render() {
        const { item, index, animation, navigation, bgColor } = this.props;

        return (
            <Animatable.View animation={animation} duration={1000} delay={index * 100}>
                <View style={styles.listItem}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Screen')}>
                        <View style={[styles.image, { backgroundColor: bgColor }]} />
                    </TouchableOpacity>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.name}>Lorem ipsum</Text>
                    </View>
                </View>
            </Animatable.View>
        );
    }
}

export default function ListScreen({ route, navigation }) {
    const viewRef = useRef(null);
    const animation = Animations[1];
    const bgColorRef = useRef(colorAr);

    const bgColor = useMemo(() => {
        return (index) => bgColorRef.current[index % colorAr.length];
    }, [bgColorRef]);


    const renderItem = useCallback(({ item, index }) => (
        <ListItem item={item} index={index} animation={animation} navigation={navigation} bgColor={bgColor(index)} />
    ), [animation, bgColor, navigation]);

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
        const unsubscribe = navigation.addListener('focus', () => {
            viewRef.current.animate({ 0: { opacity: 0.5, }, 1: { opacity: 1 } });
        });
        // ToastAndroid.show(animation+ ' Animation', ToastAndroid.SHORT);
        return () => unsubscribe;
    }, [navigation])

    const data = Array.from({ length: 15 }, (_, i) => i);

    return (
        <View style={[Styles.container]}>
            <Animatable.View
                ref={viewRef}
                easing={'ease-in-out'}
                duration={500}
                style={Styles.container}>
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
    )
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
        width: Dimensions.get('window').width / 2 - 16,
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 10,
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
})