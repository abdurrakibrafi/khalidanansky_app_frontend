import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { scale, verticalScale } from 'react-native-size-matters'

const RequestDetails = () => {
    const navigation = useNavigation()

    const [subSection, setSubSection] = useState("Agent Requests")
    const [react, setReact] = useState(false)

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
            headerTitle: 'Request Details',
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
            headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name="chevron-small-left" size={24} color="white" />
            </TouchableOpacity>),

        })
    }, [navigation])
    return (
        <LinearGradient colors={["#00084F", "#010531"]} style={{ flex: 1, padding: 12 }} start={{ x: 1, y: 0 }} end={{ x: 1, y: 0 }}>
            <View className='border w-full border-[#D1D6DB] mb-3' />
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

                <View className='flex-row  justify-between gap-2 mt-4'>
                    <View className='flex-col flex-1 gap-2'>
                        <Text className='text-[#2444FF] text-xl'>Match</Text>
                         <Text className='text-[#fff] text-xl'>Champions League Final</Text>
                    </View>
                    <View className='flex-col flex-1 gap-2'>
                        <Text className='text-[#2444FF] text-xl'>Opponent</Text>
                         <Text className='text-[#fff] text-xl'>Real Madrid</Text>
                    </View>
                </View>

                <View className='border w-full border-[#D1D6DB]/50 mb-3 mt-4' />

                 <View className='flex-col flex-1 gap-2'>
                        <Text className='text-[#2444FF] text-xl'>Date</Text>
                         <Text className='text-[#fff] text-xl'>May 28, 2024</Text>
                    </View>

                <Text className='mt-8 font-bold text-2xl text-white'>Notes</Text>
                <Text className='mt-2 font-bold text-xl text-white'>Please tag all key moments, including goals, assists, and defensive plays. Focus on player performance and tactical decisions.</Text>
            </ScrollView>
           <View className='flex-row items-center w-full  gap-3'>
             <TouchableOpacity className="flex-1 mt-2 mb-3 p-3 items-center border border-gray-400 rounded-lg overflow-hidden" onPress={() => navigation.navigate("Profile Details")}>
                <Text className="text-white text-xl font-instrumentSansBold" >Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 mt-2 mb-3 p-3 items-center bg-[#062AD6] rounded-lg overflow-hidden" onPress={() => navigation.navigate("Profile Details")}>
                <Text className="text-white text-xl font-instrumentSansBold" >Accept</Text>
            </TouchableOpacity>
           </View>
        </LinearGradient>
    )
}

export default RequestDetails