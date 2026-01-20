import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo, EvilIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons'

const Notification = () => {
    const navigaton = useNavigation()
    useLayoutEffect(() => {
        navigaton.setOptions({
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
            headerTitle: 'Notification',
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
                <TouchableOpacity className='flex-row gap-2 items-center p-2' onPress={() => navigaton.goBack()}>
                    <Entypo name="chevron-thin-left" size={24} color="white" />
                </TouchableOpacity>
            )
        })
    }, [navigaton])
    return (
        <LinearGradient
            colors={["#00084F", "#010531"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 1 }}
            className="w-full "
            style={{ flex: 1 }}
        >
            <View className="flex-1 p-3">
                <View className='w-full border border-[#D1D6DB] mb-4' />

                <Text className='mt-2 text-white font-bold text-2xl mb-2'>All</Text>
                <View className='flex-row w-full  justify-between'>
                    <View className='flex-row p-2 items-center gap-2  w-[90%]'>
                        <MaterialIcons name="notifications-active" size={24} color="white" />
                        <View><Text className='mt-2 text-[#D1D6DB] font-medium text-xl'>Level Up!</Text>
                            <Text className='mt-2 text-[#D1D6DB] font-medium text-xl'>You've reached level 3</Text></View>
                    </View>
                    <FontAwesome name="dot-circle-o" size={24} color="#2444FF" />
                </View>
            </View>
        </LinearGradient>
    )
}

export default Notification