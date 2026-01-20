import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons'
import { scale, verticalScale } from 'react-native-size-matters'
import Information from './Information'
import Videos from './Videos'

const ProfileDetails = () => {
    const navigation = useNavigation()
    const [isInfo,setIsInfo]=useState("Information")
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
            headerTitle: 'Profile Details',
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
            <View className='w-full border border-[#D1D6DB] mb-4' />
            <ScrollView className=' flex-1 ' contentContainerStyle={{ alignItems: "center" }}>
                <View style={{ width: scale(100), height: scale(100), borderRadius: scale(100) / 2, overflow: "hidden", borderColor: "white", borderWidth: 5 }}><Image source={require("../../../assets/scout/Image.png")} style={{ width: "100%", height: "100%" }} /></View>
                <Text className='font-bold text-2xl text-white mt-3'>Hi, Robert Cary</Text>
                <Text className=' text-xl text-[#D1D6DB] mt-1'>XP: 12,345 / 15,000</Text>
                <Text className=' text-xl text-[#D1D6DB] mt-1'>Midfielder | Forward</Text>
                <View className='mt-2 mb-2 flex-row '>
                    <View className='flex-1'><TouchableOpacity className='items-center' onPress={()=>setIsInfo("Information")}><Text className={`${isInfo=="Information"?"text-[#2444FF]":"text-white"} text-center font-medium text-2xl`}>Information</Text></TouchableOpacity>
                        <View className={`w-full border  ${isInfo=="Information"?"border-[#2444FF]":"border-white"} mt-2`} /></View>
                    <View className='flex-1'><TouchableOpacity className='items-center' onPress={()=>setIsInfo("Videos")}><Text className={`${isInfo=="Videos"?"text-[#2444FF]":"text-white"} text-center font-medium text-2xl`} >Videos</Text></TouchableOpacity>
                        <View className={`w-full border  ${isInfo=="Videos"?"border-[#2444FF]":"border-white"} mt-2`} /></View>
                </View>
                {isInfo=="Information"?<Information/>:<Videos/>}
            </ScrollView>

        </LinearGradient>
    )
}

export default ProfileDetails