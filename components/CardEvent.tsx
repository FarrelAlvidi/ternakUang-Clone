import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const CardEvent = () => {
    return (
        <View style={tw`bg-neutral-800 w-80 gap-4 items-center flex-row rounded-lg p-3`}>
            <Image source={require('@/assets/images/tmt.jpg')} style={tw`rounded-lg h-25 w-25`} />
            <View style={tw `gap-y-2`}>
                <Text style={tw`text-[#97F69B] text-[3]`}>Hari ini, 26 Jun <Text style={tw`text-neutral-500`}> • 19:00</Text></Text>
              <Text style={tw `text-white font-semibold w-42`}>Road to masterclass with anonim</Text>
              <Text style={tw `text-white text-[3] font-semibold`}>Free</Text>
            </View>

        </View>
    )
}

export default CardEvent