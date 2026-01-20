import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { Image } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

const VideoDetails = () => {
  const [react, setReact] = useState(false)
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackground: () => (
        <LinearGradient
          colors={["#00084F", "#010531"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 1 }}
          className="w-full "
          style={{ flex: 1 }}
        />
      ),
      headerTintColor: "#FFFFFF",
      headerTitle: 'Video Details',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
        fontFamily: "inter",
        color: "#fff",
        fontWeight: "900"
      },
      // headerBackTitleVisible: ,
      headerBackTitleStyle: { display: 'none' },
      headerBackTitle: '',
      headerLeft: () => (
        <TouchableOpacity className='flex-row gap-2 items-center p-2' onPress={() => navigation.goBack()}>
          <Entypo name="chevron-thin-left" size={24} color="white" />
        </TouchableOpacity>
      )
    })
  }, [navigation])
  return (
    <LinearGradient colors={["#00084F", "#010531"]} style={{ flex: 1, padding: 12 }} start={{ x: 1, y: 0 }} end={{ x: 1, y: 0 }}>
      <View className='border w-full border-[#D1D6DB] mb-3'/>
      <ScrollView className=' flex-1'>
        <View className='flex-1 items-center '>
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
          <Text className='text-[#fff] mb-3'>Match Highlights</Text>
          <Text className='text-[#D1D6DB]'>2024-05-15 | Opponent: FC Barcelona | Competition: Champions League</Text>
          <Text className='text-[#D1D6DB] mt-3'>Talent Tag: #RisingStar</Text>
        </View>

        <View className='flex-row p-1 items-center gap-2'>
          <Image source={require("../../../assets/scout/Icon.png")} style={{ width: 40, height: 40 }} /> <Text className='text-white text-xl font-bold'>AI Rank: 95</Text>
        </View>
      </ScrollView>
      <TouchableOpacity className="mt-2 mb-3 p-3 items-center bg-[#062AD6] rounded-lg overflow-hidden" onPress={()=>navigation.navigate("Profile Details")}>
        <Text className="text-white text-xl font-instrumentSansBold" >Submit</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default VideoDetails