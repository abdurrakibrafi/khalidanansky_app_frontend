import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo, EvilIcons } from '@expo/vector-icons'

const Search = () => {
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
            headerTitle: 'Search',
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
                <View className='border border-[#2444FF] rounded-xl h-16 flex-row items-center p-2 bg-white/5'>
                    <EvilIcons name="search" size={24} color="white" />
                    <TextInput className=' flex-1' placeholder='Search  players, tags' placeholderTextColor={"#BFC5CC"} />
                </View>
                <Text className='mt-2 text-white font-bold text-2xl'>Recent</Text>
                <Text className='mt-2 text-[#D1D6DB] font-medium text-xl'>Player: Alex</Text>
                <Text className='mt-2 text-[#D1D6DB] font-medium text-xl'>Club: FC Barcelona</Text>
            </View>
        </LinearGradient>
    )
}

export default Search