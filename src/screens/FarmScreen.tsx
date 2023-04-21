import React, { useCallback, useState } from 'react'
import { Icon, VStack, useColorModeValue, Fab } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import AnimatedColorBox from '../components/AnimatedColorBox'
import MastHead from '../components/MastHead'
import NavBar from '../components/NavBar'
import { View, Text, ScrollView, } from 'react-native'
import  SearchBar from '../components/SearchBar'


export default function FarmScreen() {

    return (
        <View style={{marginTop: 150}} >
                <SearchBar />
        </View>
    )
}