import React from 'react';
import AntDesign from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons';
import Feather from '@expo/vector-icons';


export const Icons = {
    Ionicons,
    Feather,
    AntDesign,
}

const Icon = ({ type, name, color, size = 24, style }) => {
    const fontSize = 24;
    const Tag = type;
    return (
        <>
            {type && name && (
                <Tag name={name} size={size || fontSize} color={color} style={style} />
            )}
        </>
    )
}

export default Icon