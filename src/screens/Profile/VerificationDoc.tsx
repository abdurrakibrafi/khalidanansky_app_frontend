import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons'
import CreateProductSelecPicker from 'src/components/ui/products/CreateProductSelecPicker'
const VerificationDoc = () => {
  const navigation = useNavigation()

    const [isCheck,setIsCheck]=useState(false)

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
            headerTitle: 'Verification Documents',
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
        <View className='flex-1 '>
            <LinearGradient
                colors={["#00084F", "#010531"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 1 }}
                className="w-full "
                style={{ flex: 1, paddingHorizontal: 15 }}
            >

                <View className='w-full border border-[#D1D6DB] mb-4' />

                <Text className='text-white font-bold text-2xl text-center mb-2'>Get verified to access full features</Text>
                <Text className='text-[#CBD5E1] font-normal text-xl text-center mb-4'>Verify your identity to unlock all app features and build trust within the community.</Text>


                <ScrollView contentContainerStyle={{ marginTop: 10, paddingBottom: 150 }}>
                    <View className='border border-dashed border-white rounded-xl p-6 items-center justify-center'>
                        <Feather name="camera" size={24} color="white" />
                        <Text className='text-white font-bold text-2xl text-center mb-2'>Front side of your Club ID</Text>
                        <Text className='text-[#CBD5E1] font-normal text-xl text-center mb-4'>Upload the front side of your docuement
                            Supports: JPG, PNG, PDF</Text>

                        <View className='flex-row gap-3'><TouchableOpacity className='flex-row items-center gap-2 border p-3 rounded-full flex-1 border-[#F3F4F6] justify-center'>
                            <Feather name="camera" size={24} color="#F3F4F6" /><Text className='text-[#F3F4F6]'>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex-row items-center gap-2 border p-3 rounded-full flex-1 border-[#F3F4F6] justify-center '>
                            <Feather name="download-cloud" size={24} color="#F3F4F6" /><Text className='text-[#F3F4F6]'>Choose a file</Text>
                        </TouchableOpacity></View>
                    </View>

                    <View className='border border-dashed border-white rounded-xl p-6 items-center justify-center mt-4'>
                        <Feather name="camera" size={24} color="white" />
                        <Text className='text-white font-bold text-2xl text-center mb-2'>Back side of your Club ID</Text>
                        <Text className='text-[#CBD5E1] font-normal text-xl text-center mb-4'>Upload the front side of your docuement
                            Supports: JPG, PNG, PDF</Text>

                        <View className='flex-row gap-3'><TouchableOpacity className='flex-row items-center gap-2 border p-3 rounded-full flex-1 border-[#F3F4F6] justify-center'>
                            <Feather name="camera" size={24} color="#F3F4F6" /><Text className='text-[#F3F4F6]'>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex-row items-center gap-2 border p-3 rounded-full flex-1 border-[#F3F4F6] justify-center '>
                            <Feather name="download-cloud" size={24} color="#F3F4F6" /><Text className='text-[#F3F4F6]'>Choose a file</Text>
                        </TouchableOpacity></View>
                    </View>


                </ScrollView>

                <View className='flex-row gap-2 items-center justify-center m-2'><TouchableOpacity onPress={()=>setIsCheck(!isCheck)}>{isCheck?<FontAwesome name="check-square" size={24} color="#2444FF" />:<FontAwesome name="check-square" size={24} color="white" />}</TouchableOpacity><Text className='text-[#BFC5CC]'>I Confirm that I uploaded valid government-issued photo ID.</Text></View>
                <TouchableOpacity className="mt-2 mb-3 p-3 items-center bg-[#062AD6] rounded-lg overflow-hidden " onPress={() => navigation.navigate("Preferences")}>
                    <Text className="text-white text-xl font-instrumentSansBold" >Next</Text>
                </TouchableOpacity>

            </LinearGradient>
        </View>
    )
}

export default VerificationDoc