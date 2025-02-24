import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { MaterialIcons } from '@expo/vector-icons'
const CoursesMenu = ({title,icon}:any) => {
    return (
        <View style={tw ` items-center w-1/4`}>
            <View style={tw`rounded-full p-2 bg-neutral-600 justify-center items-center`}>
                <MaterialIcons name={icon} size={24} color='white'/>
            </View>
            <Text style={tw `text-white text-[3] mt-2 text-center`}>{title}</Text>
        </View>
    )
}

export default CoursesMenu