import React, { useCallback, useState } from 'react'
import { Icon, VStack, useColorModeValue, Fab } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import AnimatedColorBox from '../components/AnimatedColorBox'
import MastHead from '../components/MastHead'
import NavBar from '../components/NavBar'
import { Text, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'


export default function HomeScreen() {
    
    return (
        <AnimatedColorBox
            flex={1}
            bg={useColorModeValue('warmGray.50', 'primary.900')}
            w="full"
        >
            <MastHead
                title="My Home"
                image={require('../assets/images/background.jpg')}
            >
                <NavBar />
            </MastHead>
            <SearchBar />
            <VStack
                flex={1}
                space={1}
                bg={useColorModeValue('warmGray.50', 'primary.900')}
                mt="-50px"
                borderTopLeftRadius="20px"
                borderTopRightRadius="20pxr"
                pt="20px"
                position={'relative'}
            >
                <ScrollView>
                    <Text style={{ fontSize: 20, paddingTop: 30, marginLeft: 30 }}>Home</Text>
                </ScrollView>
            </VStack>
        </AnimatedColorBox>
    )
}