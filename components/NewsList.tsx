import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const NewsList = ({title}) => {
  return (
    <View style={tw `border border-white p-2 px-4 rounded`}>
      <Text style={tw `text-white`}>{title}</Text>
    </View>
  )
}

export default NewsList