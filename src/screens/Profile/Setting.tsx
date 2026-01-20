import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'
import { settingItems } from 'src/constants/settingItems'
import { LinearGradient } from 'expo-linear-gradient'
import { scale } from 'react-native-size-matters'

const Setting = () => {

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
            headerTintColor: "#fff",
            headerTitle: 'Settings',
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
            ),
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

            </LinearGradient>
        </View>
    )
}

export default Setting