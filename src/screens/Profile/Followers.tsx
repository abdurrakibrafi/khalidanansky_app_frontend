import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { leaderBoard } from 'src/constants/demodata'

const Followers = () => {
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
                <Text className='text-white font-medium text-2xl bg-[#fff]/20 p-2 rounded-full'>Message</Text>
            </View>
        )
    }

    return (
        <View className='flex-1'>
            <FlatList
                data={leaderBoard}
                keyExtractor={(item, index) => index.toString()}
                renderItem={rednerLeaderBoard}
            />
        </View>
    )
}

export default Followers