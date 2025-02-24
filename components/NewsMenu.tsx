import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const NewsMenu = ({source, title, desc, list}) => {
  return (
    <View style={tw `bg-neutral-700 w-60 rounded overflow-hidden`}>
      <Image source={source} style={tw `w-60 h-30`}/>
      <View style={tw `p-3`}>
        <Text style={tw `text-white font-semibold text-base`}>{title}</Text>
        <View style={tw `flex-row justify-between mt-5`}>
            <Text style={tw `text-neutral-400 text-[3]`}>{desc}</Text>
            <Text style={tw `bg-white rounded-full px-2 font-semibold text-[3]`}>{list}</Text>
        </View>
      </View>
    </View>
  )
}

export default NewsMenu