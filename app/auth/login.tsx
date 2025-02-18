
import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonPrimary from '@/components/ButtonPrimary'
import tw from 'twrnc'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import IconMenu from '@/components/IconMenu'
const login = () => {
    return (
        <SafeAreaView>
            <Text style={tw`text-right text-neutral-300 m-4 `}>Lewati</Text>
            <View style={tw`mx-8 mt-36`}>
                <Text style={tw`font-extrabold text-white mb-3 text-lg`}>TERNAKUANG.</Text>
                <TextInput style={tw`bg-neutral-700 rounded-lg border border-neutral-500  text-white px-4`} />
                <TextInput style={tw`bg-neutral-700 rounded-lg border border-neutral-500 text-white mt-3 px-4`} />
                <View style={tw`flex-row items-center justify-between mb-7 mt-3 `}>
                    <View style={tw`flex-row items-center gap-1 `}>
                        <MaterialCommunityIcons name='checkbox-blank-outline' size={22} style={tw`text-neutral-500`} />
                        <Text style={tw`text-neutral-400`}>Ingat Saya</Text>
                    </View>
                    <Text style={tw`text-neutral-400`}>Lupa Password?</Text>
                </View>
                <ButtonPrimary text='Log In' textColor='black' bgColor='#97F69B' rute='(tabs)/home' />
                <Text style={tw`text-white text-center text-[3] mt-4`}>Belum punya akun? <Link href='/auth/daftar' style={tw`text-[#97F69B]`}>Daftar.</Link></Text>
                <Text style={tw `text-[2.8] text-white text-center mt-10`}>Atau Masuk Melalui</Text>
                <View style={tw `w-full bg-neutral-300 rounded-lg h-[.1] my-5`}></View>
                <View style={tw`flex-row gap-3 justify-center w-full`}>
                    <IconMenu icon='google' />
                    <IconMenu icon='apple1' />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default login
