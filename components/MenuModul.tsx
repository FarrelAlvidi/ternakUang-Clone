import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons'
const MenuModul = () => {
    return (
        <View style={tw`bg-neutral-900 w-[48%] rounded-lg overflow-hidden`}>
            <Image source={require('@/assets/images/tmt.jpg')} style={tw`w-full h-30`} />
            <View style={tw`p-3`}>
                <Text style={tw`text-neutral-400 text-[3]`}><Entypo name='dot-single' /> 01:24:09</Text>

                <Text style={tw`text-white font-semibold text-base`}>Invesment</Text>
                <Text style={tw`text-neutral-400 text-[3] mt-5`}>16 Jun 2022</Text>
            </View>
        </View>
    )
}

export default MenuModul