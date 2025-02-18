import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRouter } from 'expo-router'
const ButtonPrimary = ({text, textColor, bgColor, border, rute}:any) => {
    const navigation = useRouter();
  return (
    <TouchableOpacity style={[tw `w-full py-3 rounded-lg border`, {backgroundColor: bgColor, borderColor : border}]} onPress={() => {navigation.navigate(rute)}}>
      <Text style={[tw `text-center font-extrabold`, {color : textColor}]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPrimary