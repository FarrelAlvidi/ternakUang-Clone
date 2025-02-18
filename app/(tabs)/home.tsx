import { Image, StyleSheet, Platform, ScrollView, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc'
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Menu from '@/components/Menu';
import { useState } from 'react';
export default function HomeScreen() {

  const [isOpen, setIsOpen] = useState(true);
  function closeItem() {
    setIsOpen(false);
  }


  const menus = [
    { title: 'Modul Akademi', icon: 'graduation-cap' },
    { title: 'Community', icon: 'users' },
    { title: 'Event Live', icon: 'ticket' },
    { title: 'Grup Diskusi', icon: 'wechat' },
  ]
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`mx-4`}>
          <View style={tw`flex-row mt-2 items-center justify-between`}>
            <Text style={tw`font-semibold text-base text-white`}>Hai, Calon Sultan!</Text>
            <View style={tw`items-center flex-row gap-3`}>
              <MaterialCommunityIcons name='comment-text-multiple' size={24} style={tw`text-white`} />
              <MaterialIcons name='account-circle' size={24} style={tw`text-neutral-400`} />
            </View>
          </View>
          {isOpen && ( // Only render when isOpen is true
            <View style={tw`w-full rounded-lg h-18 items-center justify-between bg-neutral-800 flex-row px-3 mt-4`}>
              <View style={tw`flex-row items-center w-2/3 gap-3`}>
                <MaterialCommunityIcons name='bell-badge' size={24} style={tw`text-white bg-neutral-500 rounded-full p-2`} />
                <Text style={tw`text-white text-[2.8] `}>
                  Nikmati insight, berita dan update terkini, <Text style={tw`underline text-[#97F69B]`}>nyalakan notifikasi</Text>
                </Text>
              </View>
              <AntDesign onPress={closeItem} name='close' size={20} color='white' />
            </View>
          )}
          <ScrollView horizontal style={tw`my-5`}>
            <View style={tw`gap-3 flex-row`}>
              <Image source={require('@/assets/images/tmt.jpg')} style={tw`rounded-lg h-35 w-80`} />
              <Image source={require('@/assets/images/tmt.jpg')} style={tw`rounded-lg h-35 w-80`} />
            </View>
          </ScrollView>
          <View style={tw`flex-row flex-wrap gap-3`}>
            {menus.map((menu) => (
              <Menu title={menu.title} icon={menu.icon} />
            ))}
          </View>



        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
