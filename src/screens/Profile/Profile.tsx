import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'
import { scale } from 'react-native-size-matters'
import * as Progress from 'react-native-progress';
import Overview from './Overview'
import Stats from './Stats'
import Videos from './Videos'
import Followers from './Followers'

const routeSub = {
  Overview: <Overview/>,
  Stats: <Stats/>,
  Videos: <Videos/>,
  Followers: <Followers/>,
}

const Profile = () => {
  const navigation = useNavigation()
  const [subSection, setSubSection] = useState("Overview")

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
      headerTintColor: "#fff",
      headerTitle: 'Profile',
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
      headerLeft: null,
      headerRight: () => (
        <TouchableOpacity className='p-3' onPress={()=>navigation.navigate("Setting")}><Feather name="settings" size={24} color="white" /></TouchableOpacity>
      )
    })
  }, [navigation])

  return (
    <View className='flex-1 items-center '>
      <LinearGradient
        colors={["#00084F", "#010531"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 1 }}
        className="w-full items-center"
        style={{ flex: 1, padding: 10 }}
      >
        <View className='w-full border border-[#D1D6DB] mb-4 ' />

        <View style={{ width: scale(100), height: scale(100), borderRadius: scale(100) / 2, overflow: "hidden", borderColor: "white", borderWidth: 5 }}><Image source={require("../../../assets/scout/Image.png")} style={{ width: "100%", height: "100%" }} /></View>
        <Text className='font-bold text-2xl text-white mt-3 text-center'>Hi, Robert Cary</Text>
        <Text className=' text-xl text-[#D1D6DB] mt-1 text-center'>XP: 12,345 / 15,000</Text>
        <Text className=' text-xl text-[#D1D6DB] mt-1 text-center'>Midfielder | Forward</Text>

        <Text className='text-white text-xl font-bold w-full mt-5 mb-5'>XP Progress</Text>
        <Progress.Bar progress={0.3} width={400} />
        <View className='mt-4 mb-2 flex-row '>
          <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Overview")}><Text className={`${subSection == "Overview" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`}>Overview</Text></TouchableOpacity>
            <View className={`w-full border  ${subSection == "Overview" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>
          <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Stats")}><Text className={`${subSection == "Stats" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`} >Stats</Text></TouchableOpacity>
            <View className={`w-full border  ${subSection == "Stats" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>
          <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Videos")}><Text className={`${subSection == "Videos" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`}>Videos</Text></TouchableOpacity>
            <View className={`w-full border  ${subSection == "Videos" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>
          <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Followers")}><Text className={`${subSection == "Followers" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`} >Followers</Text></TouchableOpacity>
            <View className={`w-full border  ${subSection == "Followers" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>
        </View>
        <ScrollView className='w-full'>
          {routeSub[subSection as keyof typeof routeSub]}
        </ScrollView>

      </LinearGradient>
    </View>
  )
}

export default Profile