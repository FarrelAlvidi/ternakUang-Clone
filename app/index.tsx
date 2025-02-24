import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonPrimary from '@/components/ButtonPrimary'

const index = () => {
    return (
        <SafeAreaView>
            <ScrollView>
            <Text style={tw`text-right text-neutral-300 m-4 `}>Lewati</Text>
            <View style={tw` items-center m-8`}>
                <Image source={require('@/assets/images/index.png')} style={tw`mt-10 w-80 h-70`} />

                <Text style={tw`text-white text-lg font-extrabold text-center mt-10`}>Belajar Investasi {'\n'} & Keuangan Pribadi</Text>
                <Text style={tw`text-neutral-400 text-center mt-4 mb-10`}>Belajar Paling gampang, praktis, & interaktif. Dengan menonton video secara online dengan lebih dari 150+ video dari mentor yang sudah ahli di bidangnya</Text>
                <View style={tw`gap-y-3 w-full`}>
                    <ButtonPrimary text='Mulai Belajar' textColor='black' bgColor='#97F69B' />
                    <ButtonPrimary text='Login' textColor='white' border='white' rute='auth/login' />
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default index