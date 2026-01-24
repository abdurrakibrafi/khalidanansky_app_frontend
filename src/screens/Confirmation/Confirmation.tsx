import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'
import { leaderBoard } from 'src/constants/demodata'
import { scale } from 'react-native-size-matters'

const Confirmation = () => {

    const navigation = useNavigation()

    const [subSection, setSubSection] = useState("Agent Requests")

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
        return (<>
            <TouchableOpacity className='flex-row items-center justify-between  rounded-xl p-3 mb-2' onPress={()=>navigation.navigate("Request Details")}>
                <View className='flex-row gap-3'>
                    <Image source={item?.image} style={{ width: scale(65), height: scale(45), borderRadius: 10,}} />
                    <View>
                        <Text className='text-white font-medium text-2xl'>Video: Game Highlights</Text>
                        <Text className='text-[#2444FF] font-medium text-xl'>Submitted by Agent: Ben</Text>
                    </View>
                </View>
                
            </TouchableOpacity>
             <View className='w-full border border-[#BFC5CC] mb-4 ' />
             </>
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
                <View className='mt-4 mb-6 flex-row  items-center'>
                    <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Agent Requests")}><Text className={`${subSection == "Agent Requests" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`}>Agent Requests</Text></TouchableOpacity>
                        <View className={`w-full border  ${subSection == "Agent Requests" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>
                    <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Tagged")}><Text className={`${subSection == "Tagged" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`} >Tagged</Text></TouchableOpacity>
                        <View className={`w-full border  ${subSection == "Tagged" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>
                    <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Match")}><Text className={`${subSection == "Match" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`}>Match</Text></TouchableOpacity>
                        <View className={`w-full border  ${subSection == "Match" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>

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