import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'
import { leaderBoard } from 'src/constants/demodata'
import { scale } from 'react-native-size-matters'

const Confirmation = () => {

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

        })
    }, [navigation])

    const rednerLeaderBoard = ({ item }) => {
        return (
            <View className='flex-row items-center justify-between bg-[#192254] rounded-xl p-3 mb-2'>
                <View className='flex-row gap-3'>
                    <Image source={item?.image} style={{ width: scale(45), height: scale(45), borderRadius: 50, borderWidth: 2, borderColor: "white" }} />
                    <View>
                        <Text className='text-white font-medium text-2xl'>{item?.name}</Text>
                        <Text className='text-[#D1D6DB] font-medium text-xl'>{item?.Level}</Text>
                    </View>
                </View>
                <Text className='text-white font-medium text-2xl'>{item?.hash}</Text>
            </View>
        )
    }

    return (
        <View className='flex-1 '>
            <LinearGradient
                colors={["#00084F", "#010531"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 1 }}
                className="w-full "
                style={{ flex: 1, padding: 10 }}
            >
                <View className='w-full border-2 border-[#2444FF] mb-4 bg-[#2444FF]' />
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

                <FlatList
                    data={leaderBoard}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={rednerLeaderBoard}
                />
            </LinearGradient>
        </View>
    )
}

export default Confirmation