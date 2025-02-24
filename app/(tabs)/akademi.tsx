import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import MenuModul from '@/components/MenuModul'
export default function akademi() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`px-3 py-2`}>
          <Text style={tw`text-white font-bold text-lg`}>Akademis</Text>
          <View style={tw `flex-row gap-3 flex-wrap mt-5`}>
          <MenuModul />
          <MenuModul />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}