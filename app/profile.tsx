import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
export default function profile() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={tw`flex-row items-center justify-between w-full`}>
                    <Link href='/home'><Feather name='chevron-left' size={24} color='white' /></Link>
                    <Text style={tw`text-white text-center text-base font-semibold`}>Profile</Text>
                    <Text></Text>
                </View>
                <View style={tw`items-center justify-center h-60 gap-y-1`}>
                    <MaterialCommunityIcons name='account-edit' size={70} color='white' style={tw`bg-neutral-600 rounded-full p-2`} />
                    <Text style={tw`text-white text-lg font-semibold`}>ChamjoDeisngmm</Text>
                    <Text style={tw`text-neutral-400 `}>Non Member</Text>
                </View>
                <View>
                    <View style={tw`bg-neutral-900 w-full p-3`}><Text style={tw`font-semibold text-neutral-500`}>Data Pribadi</Text></View>
                    <View style={tw`flex-row p-2 w-full items-center gap-5`}>
                        <AntDesign name='user' size={24} color='white' />
                        <View style={tw`flex-row items-center border-b border-neutral-700 py-3 justify-between w-90`}>
                            <Text style={tw`text-white text-base font-semibold`}>Ubah Profile</Text>
                            <Feather name='chevron-right' size={24} color='white' />
                        </View>
                    </View>
                    <View style={tw`flex-row p-2 w-full items-center gap-5`}>
                        <AntDesign name='key' size={24} color='white' />
                        <View style={tw`flex-row items-center border-b border-neutral-700 py-3 justify-between w-90`}>
                            <Text style={tw`text-white text-base font-semibold`}>Ubah Password</Text>
                            <Feather name='chevron-right' size={24} color='white' />
                        </View>
                    </View>
                    <View style={tw`flex-row p-2 w-full items-center gap-5`}>
                        <AntDesign name='clockcircleo' size={24} color='white' />
                        <View style={tw`flex-row items-center py-3 justify-between w-90`}>
                            <Text style={tw`text-white text-base font-semibold`}>Riwayat Transaksi</Text>
                            <Feather name='chevron-right' size={24} color='white' />
                        </View>
                    </View>
                    <View style={tw`bg-neutral-900 w-full p-3 items-center flex-row justify-between`}>
                        <Text style={tw`font-semibold text-neutral-500`}>Bantuan</Text>
                        <Text style={tw`font-semibold text-[3] text-neutral-500`}>Terakhir update 19/07/22 v2.2.1</Text>
                    </View>
                    <View style={tw`flex-row p-2 w-full items-center gap-5`}>
                        <Ionicons name='shield-checkmark-outline' size={24} color='white' />
                        <View style={tw`flex-row items-center border-b border-neutral-700 py-3 justify-between w-90`}>
                            <Text style={tw`text-white text-base font-semibold`}>Kebijakan Privasi</Text>
                            <Feather name='chevron-right' size={24} color='white' />
                        </View>
                    </View>
                    <View style={tw`flex-row p-2 w-full items-center gap-5`}>
                        <AntDesign name='questioncircleo' size={24} color='white' />
                        <View style={tw`flex-row items-center border-b border-neutral-700 py-3 justify-between w-90`}>
                            <Text style={tw`text-white text-base font-semibold`}>Frequently Asked Questions</Text>
                            <Feather name='chevron-right' size={24} color='white' />
                        </View>
                    </View>
                    <View style={tw`flex-row p-2 w-full items-center gap-5`}>
                        <AntDesign name='message1' size={24} color='white' />
                        <View style={tw`flex-row items-center border-b border-neutral-700 py-3 justify-between w-90`}>
                            <Text style={tw`text-white text-base font-semibold`}>Hubungi Kami</Text>
                            <Feather name='chevron-right' size={24} color='white' />
                        </View>
                    </View>
                    <View style={tw`flex-row p-2 w-full items-center gap-5`}>
                        <AntDesign name='hearto' size={24} color='white' />
                        <View style={tw`flex-row items-center border-b border-neutral-700 py-3 justify-between w-90`}>
                            <Text style={tw`text-white text-base font-semibold`}>Rate TernakUang</Text>
                            <Feather name='chevron-right' size={24} color='white' />
                        </View>
                    </View>
                    <View style={tw`flex-row p-2 w-full items-center gap-5`}>
                        <AntDesign name='edit' size={24} color='white' />
                        <View style={tw`flex-row items-center border-b border-neutral-700 py-3 justify-between w-90`}>
                            <Text style={tw`text-white text-base font-semibold`}>Feedback From</Text>
                            <Feather name='chevron-right' size={24} color='white' />
                        </View>
                    </View>
                    <View style={tw`flex-row p-2 w-full items-center gap-5`}>
                        <AntDesign name='logout' size={24} color='white' />
                        <View style={tw`flex-row items-center border-b border-neutral-700 py-3 justify-between w-90`}>
                            <Text style={tw`text-white text-base font-semibold`}>Logout</Text>
                            <Feather name='chevron-right' size={24} color='white' />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}