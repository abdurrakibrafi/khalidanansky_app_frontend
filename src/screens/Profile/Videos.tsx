import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { AntDesign } from '@expo/vector-icons'
import { recommendedList } from 'src/constants/demodata'

const Videos = () => {
    const [react, setReact] = useState(false)
    return (
        <View className='flex-1'>
            <View className='flex-1 items-center mt-4'>
                <View className='items-center justify-center rounded-xl overflow-hidden' style={{ width: scale(320), height: verticalScale(200) }}>
                    <Image source={require("../../../assets/scout/vImg.png")} style={{ width: "100%", height: "100%" }} />
                </View>
            </View>
            <View className='mt-2 mb-1 flex-row w-[80px] p-2 gap-2 items-center'>
                <TouchableOpacity onPress={() => setReact(!react)}>
                    {react ? <AntDesign name="heart" size={24} color="#2444FF" /> : <AntDesign name="heart" size={24} color="#ffffff" />}
                </TouchableOpacity>
                <Text className='text-white'>56.8k</Text>
            </View>

            <View className='mt-2 mb-4'>
                <Text className='text-[#fff] mb-3'>Replace</Text>
                <Text className='text-[#D1D6DB]'>2:30 · 1.2K views · 56.8K likes</Text>
                <Text className='text-[#D1D6DB] mt-1'>Primary Highlight</Text>
            </View>
            <View className='flex-row flex-wrap gap-2 mt-3 '>
                {recommendedList?.map(item => <TouchableOpacity style={{ width: "48%", height: 150, borderRadius: 20, overflow: "hidden" }}>

                    <Image source={item?.image} style={{ width: "100%", height: "100%" }} />

                </TouchableOpacity>)}
            </View>
        </View>
    )
}

export default Videos