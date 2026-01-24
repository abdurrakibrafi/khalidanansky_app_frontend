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
import { useAppSelector } from 'src/redux/hooks'

const routeSub = {
  Overview: <Overview />,
  Stats: <Stats />,
  Videos: <Videos />,
  Followers: <Followers />,
}

const Profile = () => {
  const navigation = useNavigation()
  const [subSection, setSubSection] = useState("Overview")
  const userType = useAppSelector((state) => state.auth.userType)

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
        <TouchableOpacity className='p-3' onPress={() => navigation.navigate("Setting")}><Feather name="settings" size={24} color="white" /></TouchableOpacity>
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

        {userType==1&&<><Text className='text-white text-xl font-bold w-full mt-5 mb-5'>XP Progress</Text>
        <Progress.Bar progress={0.3} width={400} /></>}

          
          {userType==2 &&<><View className='flex-row items-center gap-2 mt-3 w-full'>
            <View className='flex-1 flex-row items-center gap-2 bg-[#2444FF]/50 p-2 rounded-md'>
              <Image source={require("../../../assets/scout/pf1.png")} style={{width:36,height:36}}/>
              <View>
                <Text className='text-[#fff]/50 text-xl '>Discovered</Text>
                <Text className='text-[#fff] text-2xl font-medium'>6</Text>
              </View>
            </View>
            <View className='flex-1 flex-row items-center gap-2 bg-[#2444FF]/50 p-2 rounded-md'>
              <Image source={require("../../../assets/scout/pf2.png")} style={{width:36,height:36}}/>
              <View>
                <Text className='text-[#fff]/50 text-xl '>Shortlisted</Text>
                <Text className='text-[#fff] text-2xl font-medium'>6</Text>
              </View>
            </View>
          </View>

          <View className='flex-row items-center gap-2 mt-3 w-full'>
            <View className='flex-1 flex-row items-center gap-2 bg-[#2444FF]/50 p-2 rounded-md'>
              <Image source={require("../../../assets/scout/pf3.png")} style={{width:36,height:36}}/>
              <View>
                <Text className='text-[#fff]/50 text-xl '>Top Regions</Text>
                <Text className='text-[#fff] text-2xl font-medium'>6</Text>
              </View>
            </View>
            <View className='flex-1 flex-row items-center gap-2 bg-[#2444FF]/50 p-2 rounded-md'>
              <Image source={require("../../../assets/scout/pf4.png")} style={{width:36,height:36}}/>
              <View>
                <Text className='text-[#fff]/50 text-xl '>New Videos</Text>
                <Text className='text-[#fff] text-2xl font-medium'>6</Text>
              </View>
            </View>
          </View></>}


        <View className='mt-4 mb-2 flex-row '>
          <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Overview")}><Text className={`${subSection == "Overview" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`}>Overview</Text></TouchableOpacity>
            <View className={`w-full border  ${subSection == "Overview" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>
          {userType == 1 && <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Stats")}><Text className={`${subSection == "Stats" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`} >Stats</Text></TouchableOpacity>
            <View className={`w-full border  ${subSection == "Stats" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>}
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