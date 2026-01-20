import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { leaderBoard } from 'src/constants/demodata'
import { scale } from 'react-native-size-matters'

const LeaderBoard = () => {
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
            headerTintColor: "#2444FF",
            headerTitle: 'XP',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontSize: 20,
                fontFamily: "inter",
                color: "#2444FF",
                fontWeight: "900"
            },
            // headerBackTitleVisible: ,
            headerBackTitleStyle: { display: 'none' },
            headerBackTitle: '',
            headerLeft: null
        })
    }, [navigation])

    const rednerLeaderBoard=({item})=>{
        return(
            <View className='flex-row items-center justify-between bg-[#192254] rounded-xl p-3 mb-2'>
                <View className='flex-row gap-3'>
                    <Image source={item?.image} style={{width:scale(45),height:scale(45),borderRadius:50,borderWidth:2,borderColor:"white"}}/>
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
                <View className='flex-row items-center  gap-2 mb-3'>
                    <TouchableOpacity className='flex-row gap-2 items-center border border-[#94A3B8] p-2 rounded-full flex-1 justify-center'><Text className='text-white font-medium text-xl'>Global</Text><AntDesign name="down" size={24} color="#94A3B8" /></TouchableOpacity>
                    <TouchableOpacity className='flex-row gap-2 items-center border border-[#94A3B8] p-2 rounded-full flex-1 justify-center'><Text className='text-white font-medium text-xl'>Local</Text><AntDesign name="down" size={24} color="#94A3B8" /></TouchableOpacity>
                    <TouchableOpacity className='flex-row gap-2 items-center border border-[#94A3B8] p-2 rounded-full flex-1 justify-center'><Text className='text-white font-medium text-xl'>Friends</Text><AntDesign name="down" size={24} color="#94A3B8" /></TouchableOpacity>
                </View>

                <FlatList 
                    data={leaderBoard}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={rednerLeaderBoard}
                />
            </LinearGradient>
        </View>
    )
}

export default LeaderBoard