import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { scale } from 'react-native-size-matters'
import { leaderBoard } from 'src/constants/demodata'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Entypo } from '@expo/vector-icons'

const status = {
    Accepted: "View Profile",
    Pending: "Cancel Request",
    Rejected: <Entypo name="chevron-small-right" size={24} color="white" />
}

const MyContributions = () => {

    const navigation = useNavigation()
    const [subSection, setSubSection] = useState("Accepted")
    console.log(status[subSection])

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
            headerTitle: 'My Contributions',
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
                <TouchableOpacity className='flex-row gap-2 items-center p-2' onPress={() => navigaiton.goBack()}>
                    <Entypo name="chevron-thin-left" size={24} color="white" />
                </TouchableOpacity>
            ),
            headerRight: null
        })
    }, [navigation])

    const rednerLeaderBoard = ({ item }) => {
        return (
            <View className='flex-row items-center justify-between  rounded-xl p-3 mb-2'>
                <View className='flex-row gap-3'>
                    <Image source={item?.image} style={{ width: scale(45), height: scale(45), borderRadius: 50, borderWidth: 2, borderColor: "white" }} />
                    <View>
                        <Text className='text-white font-medium text-2xl'>{item?.name}</Text>
                        <Text className='text-[#D1D6DB] font-medium text-xl'>Midfielder | Forward</Text>
                    </View>
                </View>
                {subSection == "Rejected" ? <TouchableOpacity onPress={() => navigation.navigate("Reject Video")}>
                    <Text className='text-white font-medium text-2xl bg-[#fff]/20 p-2 rounded-full'>{status[subSection]}</Text>
                </TouchableOpacity> : <TouchableOpacity>
                    <Text className='text-white font-medium text-2xl bg-[#fff]/20 p-2 rounded-full'>{status[subSection]}</Text>
                </TouchableOpacity>}
            </View>
        )
    }

    return (
        <View className='flex-1'>
            <View className='mt-4 mb-2 flex-row '>
                <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Accepted")}><Text className={`${subSection == "Accepted" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`}>Accepted</Text></TouchableOpacity>
                    <View className={`w-full border  ${subSection == "Accepted" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>

                <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Pending")}><Text className={`${subSection == "Pending" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`}>Pending</Text></TouchableOpacity>
                    <View className={`w-full border  ${subSection == "Pending" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>
                <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Rejected")}><Text className={`${subSection == "Rejected" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`} >Rejected</Text></TouchableOpacity>
                    <View className={`w-full border  ${subSection == "Rejected" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>
            </View>
            <FlatList
                data={leaderBoard}
                keyExtractor={(item, index) => index.toString()}
                renderItem={rednerLeaderBoard}
            />
        </View>
    )
}

export default MyContributions