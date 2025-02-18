import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonPrimary from '@/components/ButtonPrimary'
import tw from 'twrnc'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import IconMenu from '@/components/IconMenu'
const daftar = () => {
    return (
        <SafeAreaView>
            <Text style={tw`text-right text-neutral-300 m-4 `}>Lewati</Text>
            <View style={tw`mx-8 mt-36`}>
                <Text style={tw`font-extrabold text-white mb-3 text-lg`}>TERNAKUANG.</Text>
                <TextInput style={tw`bg-neutral-700 rounded-lg border border-neutral-500  text-white px-4`} />
                <TextInput style={tw`bg-neutral-700 rounded-lg border border-neutral-500 text-white mt-3 px-4 mb-6`} />
                <ButtonPrimary text='Log In' textColor='black' bgColor='#97F69B' rute='(tabs)/home'/>
                <Text style={tw `text-[2.8] text-neutral-400 mt-5`}>Dengan Mendaftar kamu menyetujui <Text style={tw `underline`}>Syarat dan Ketentuan, Privacy Policy</Text> dan <Text style={tw `underline`}>Disclaimer</Text></Text>

            </View>
        </SafeAreaView>
    )
}

export default daftar