import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Entypo, FontAwesome } from '@expo/vector-icons'
const Menu = ({icon, title}:any) => {
  return (
    <View style={tw ` pl-3 w-[48%] bg-neutral-800 items-center flex-row rounded-lg border-l-2 border-[#97f69b] h-12 gap-2`}>
        <FontAwesome name={icon} size={18} style={tw `text-white rounded-full bg-neutral-600 p-2 text-center`}/> 
      <Text style={tw `text-neutral-300 text-[3]`}>{title}</Text>
    </View>
  )
}

export default Menu