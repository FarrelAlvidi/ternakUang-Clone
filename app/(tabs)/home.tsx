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
import CardEvent from '@/components/CardEvent';
import CoursesMenu from '@/components/CoursesMenu';
import NewsList from '@/components/NewsList';
import NewsMenu from '@/components/NewsMenu';
import { Link } from 'expo-router';
export default function HomeScreen() {

  const [isOpen, setIsOpen] = useState(true);
  function closeItem() {
    setIsOpen(false);
  }

  const NewsLists = [ 'Modul', 'Watchlist', 'News', 'Events', 'Reports' ,'Record']

  const courses = [
    {title: 'Manajemen Income' , icon: 'money'},
    {title: 'Asuransi' , icon: 'health-and-safety'},
    {title: 'Saham' , icon: 'query-stats'},
    {title: 'Saham' , icon: 'query-stats'},
    {title: 'Cryptocurrency' , icon: 'currency-bitcoin'},
    {title: 'Peer-to-Peer Landing' , icon: 'connect-without-contact'},
    {title: 'Obligasi' , icon: 'file-copy'},
    {title: 'Lainnya' , icon: 'grid-view'},
  ]
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
              <Link href='/profile'><MaterialIcons name='account-circle' size={24} style={tw`text-neutral-400`} /></Link>
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
            {menus.map((menu, index) => (
              <Menu key={index} title={menu.title} icon={menu.icon} />
            ))}
          </View>
          <View style={tw`w-full mt-5 rounded-lg bg-neutral-800 flex-row gap-4 px-4 py-3 items-center`}>
          <Image source={require('@/assets/images/favicon.png')} style={tw`rounded-lg h-12 w-12`} />
            <View style={tw `mr-4`}>
              <Text style={tw`text-white font-semibold`}>Yuk, Ikuti <Text style={tw`text-[#97F69B]`}>Tes Finansial</Text>!</Text>
              <Text style={tw`text-white text-[2.6]`}>Dapatkan Saran & Rekomendasi Belajarmu</Text>
            </View>
            <View style={tw `bg-[#97F69B] rounded-full p-2`}>
              <AntDesign name='arrowright' style={tw `text-right`} size={12} />
            </View>
          </View>
          
          <View style={tw `flex-row justify-between my-6`}>
            <View style={tw `flex-row items-center gap-1`}>
              <AntDesign name='calendar' color='white' />
              <Text style={tw `text-white text-[3]`}>Ikuti Live Event Terdekat</Text>
            </View>
            <Text style={tw `text-white text-[2.8]`}>Lihat Semua</Text>
          </View>
          <ScrollView  horizontal>
            <View style={tw `w-full flex-row flex-wrap gap-3`}>
              <CardEvent/>
              <CardEvent/>
            </View>
          </ScrollView>
          <ScrollView  horizontal>
            <View style={tw `mt-3 w-full flex-row flex-wrap gap-3`}>
              <CardEvent/>
              <CardEvent/>
            </View>
          </ScrollView>

          <View style={tw `w-full bg-neutral-800 rounded-lg p-4 mt-5`}>
            <Text style={tw `text-white`}>📅 Mau Belajar Apa Hari ini</Text>
            <View style={tw `flex-row flex-wrap gap-y-4 w-full mt-6`}>
            {courses.map((course, index) => (
              <CoursesMenu key={index} title={course.title} icon={course.icon}/>
            ))}
            </View>
          </View>

          <View style={tw `mt-5`}>
            <Text style={tw `text-white`}>🎉 Terbaru di Ternak Uang!</Text>
          </View> 
          <ScrollView horizontal>
          <View style={tw `flex-row gap-4 my-5`}>
            {NewsLists.map((list) => (
              <NewsList title={list}/>
            ))}
          </View>
          </ScrollView>

          <ScrollView horizontal>
            <View style={tw `flex-row gap-4`}>
              <NewsMenu source={require('@/assets/images/tmt.jpg')} title='Bisnis untung kecil' desc='Extreme' list='1 Video'/>
              <NewsMenu source={require('@/assets/images/tmt.jpg')} title='Bisnis untung kecil' desc='Extreme' list='1 Video'/>
              <NewsMenu source={require('@/assets/images/tmt.jpg')} title='Bisnis untung kecil' desc='Extreme' list='1 Video'/>
            </View>
          </ScrollView>


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
