import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons'
const IconMenu = ({icon}) => {
  return (
    <View style={tw `bg-black rounded-lg border border-neutral-400 w-10 h-10 items-center justify-center`}>
      <AntDesign style={tw `text-neutral-400`} name={icon} size={24}/>
    </View>
  )
}

export default IconMenu