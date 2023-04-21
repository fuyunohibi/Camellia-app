import React, { useState } from 'react';
import { HStack, Input, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
        // Here you can perform any actions related to the search query, such as filtering data
    };

    return (
        <HStack
            alignSelf="center"
            bg="white"
            borderRadius={20}
            px={4}
            py={3}
            shadow={2}
            width={360}
            height={55}
            zIndex={1}
            position='absolute'
            top={225}
        >
            <Icon
                as={<Feather name="search" />}
                color="gray.800"
                size="xl"
                mr={2}
            />
            <Input
                variant="unstyled" // remove the textfield border
                placeholder="Search.."
                placeholderTextColor="gray.400"
                value={searchQuery}
                onChangeText={handleSearch}
                fontSize="md"
                flex={1}
            />
        </HStack>
    );
};

export default SearchBar;