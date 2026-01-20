import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'

const Overview = () => {
    return (
        <View className='flex-1'>
            <View className='p-2 mb-2'>
                <Text className='text-white font-medium text-2xl mt-2'>Playstyle</Text>
                <View className='flex-row w-full p-2 gap-2'><Text className='text-[#CBD5E1] font-medium text-xl mt-2 border border-[#CBD5E1] p-1 rounded-xl'>Speedster</Text>
                    <Text className='text-[#CBD5E1] font-medium text-xl mt-2 border border-[#CBD5E1] p-1 rounded-xl'>Defender</Text>
                    <Text className='text-[#CBD5E1] font-medium text-xl mt-2 border border-[#CBD5E1] p-1 rounded-xl'>Dribbler</Text></View>
            </View>
            <Text className='text-white font-medium text-2xl mt-2'>Positions</Text>
            <View style={{ width: scale(335), height: verticalScale(335) }}>
                <Image source={require("../../../assets/scout/Stage.png")} style={{ width: "100%", height: "100%" }} resizeMode='contain' />
            </View>
            <TouchableOpacity className="mt-2 mb-3 p-3 items-center bg-[#062AD6] rounded-lg overflow-hidden" >
                <Text className="text-white text-xl font-instrumentSansBold" >View My Rank</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Overview