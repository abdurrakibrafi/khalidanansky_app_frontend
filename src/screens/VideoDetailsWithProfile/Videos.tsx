import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { recommendedList } from 'src/constants/demodata'

const Videos = () => {
    const navigation = useNavigation()
    return (
        <View className='flex-1'>
            <View className='flex-row  justify-between mb-2 w-full'><Text className='text-white font-medium text-xl'>Shorts</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Recommended List")}><Text className='text-white font-medium text-xl '>See All</Text></TouchableOpacity></View>
            <ScrollView horizontal={true}>
                <View className='flex-row gap-3'>
                    {recommendedList?.map(item => <TouchableOpacity>
                        <Image source={item?.image} style={{ width: scale(136), height: verticalScale(182), borderRadius: 15 }} />
                        <Text className='text-white text-xl font-medium mt-2'>{item?.name}</Text>
                        <Text className='text-white text-lg font-normal mt-1'>{item?.position}</Text>
                    </TouchableOpacity>)}
                </View>
            </ScrollView>
            <Text className='mt-2 mb-2 text-white font-medium text-2xl'>Videos</Text>
            <View className='flex-row flex-wrap gap-2 mt-3 '>
                {recommendedList?.map(item => <TouchableOpacity onPress={() => navigation.navigate("Video Details")} style={{width:"48%",height:200,borderRadius:20,overflow:"hidden"}}>

                    <Image source={item?.image} style={{ width: "100%", height: "100%"}} />

                </TouchableOpacity>)}
            </View>
        </View>
    )
}

export default Videos