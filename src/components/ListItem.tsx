import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useColorModeValue } from 'native-base';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import { Animations } from '../constants/Animations';
import Colors from '../constants/Colors';
import Styles from '../common/Styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
];

const ListItem = ({ item, index, animation, bgColor }) => {
    const navigation = useNavigation();
    const handlePressList = useCallback(() => {
        navigation.navigate('Task');
    }, [navigation]);

    return (
        <Animatable.View animation={animation} duration={1000} delay={index * 100}>
            <View style={styles.listItem}>
                <TouchableOpacity activeOpacity={0.7} onPress={handlePressList}>
                    <View style={[styles.image, { backgroundColor: bgColor }]} />
                </TouchableOpacity>
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            </View>
        </Animatable.View>
    );
};


ListItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    animation: PropTypes.oneOf(Object.keys(Animations)).isRequired,
    bgColor: PropTypes.string.isRequired,
};

const ListItems = ({ navigation }) => {
    const [itemCount, setItemCount] = useState(1);
    const viewRef = useRef(null);
    const animation = Animations[1];
    const bgColorRef = useRef(colorAr);

    const bgColor = useMemo(() => {
        return (index) => bgColorRef.current[index % colorAr.length];
    }, [bgColorRef]);

    const renderItem = useCallback(({ item, index }) => (
        <ListItem 
            item={item} 
            index={index} 
            animation={animation} 
            bgColor={bgColor(index)} 
        />
    ), [animation, bgColor, navigation])

    useEffect(() => {
        const unsubscribe = navigation && navigation.addListener('focus', () => {
            viewRef.current.animate({ 0: { opacity: 0.5, }, 1: { opacity: 1 } });
        });
        return () => unsubscribe;
    }, [navigation])

    const data = Array.from({ length: itemCount }, (_, i) => i);

    return (
        <View style={[Styles.container]}>
            <Animatable.View
                ref={viewRef}
                easing={'ease-in-out'}
                duration={10}
                style={Styles.container}>

                <View style={styles.viewContainer}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'darkblue',
                            borderRadius: 50,
                            height: 70,
                            width: 70,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => setItemCount(itemCount + 1)}
                    >
                        <Feather name="plus" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={data}
                    keyExtractor={(_, i) => String(i)}
                    numColumns={2}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
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
        backgroundColor: 'primary.100',
    },
    detailsContainer: {
        paddingHorizontal: 16,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        bottom: - (Dimensions.get('window').height - 330),
        right: Dimensions.get('window').width / 2 - 188,
        zIndex: 1,
    },
});

export default ListItems;