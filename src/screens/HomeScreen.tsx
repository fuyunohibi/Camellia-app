import React from 'react'
import { VStack, useColorModeValue } from 'native-base'
import AnimatedColorBox from '../components/AnimatedColorBox'
import MastHead from '../components/MastHead'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import ListItem from '../components/ListItem';


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
                borderTopRightRadius="20px"
                pt="20px"
                position={'relative'}
            >
                <ListItem />
            </VStack>
        </AnimatedColorBox>
    );
}

