import { View, Text, Image } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'

const Information = () => {
    return (
        <View className='flex-1 p-3'>
            <View style={{ width: scale(335), height: verticalScale(335) }}>
                <Image source={require("../../../assets/scout/plNm.png")} style={{ width: "100%", height: "100%" }} />
            </View>
            <View className='p-2 mb-2'>
                <Text className='text-white font-medium text-2xl mt-2'>Player Card</Text>
                <Text className='text-[#D1D6DB] font-medium text-xl mt-2'>Age: 22 | Height: 180cm | Weight: 75kg</Text>
            </View>
            <View style={{ width: scale(335), height: verticalScale(335) }}>
                <Image source={require("../../../assets/scout/Stage.png")} style={{ width: "100%", height: "100%" }} resizeMode='contain' />
            </View>
            <View className='p-2 mb-2'>
                <Text className='text-white font-medium text-2xl mt-2'>Pitch Visualization</Text>
                <Text className='text-[#D1D6DB] font-medium text-xl mt-2'>Shows player's position and heat-map on the field</Text>
            </View>
            <View className='p-2 mb-2'>
                <Text className='text-white font-medium text-2xl mt-2'>Talent Tags</Text>
                <View className='flex-row w-full p-2 gap-2'><Text className='text-[#CBD5E1] font-medium text-xl mt-2 border border-[#CBD5E1] p-1 rounded-xl'>Speedster</Text>
                    <Text className='text-[#CBD5E1] font-medium text-xl mt-2 border border-[#CBD5E1] p-1 rounded-xl'>Defender</Text>
                    <Text className='text-[#CBD5E1] font-medium text-xl mt-2 border border-[#CBD5E1] p-1 rounded-xl'>Dribbler</Text></View>
            </View>
        </View>
    )
}

export default Information