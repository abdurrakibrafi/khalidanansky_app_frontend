import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { BarChart, LineChart, PieChart, PopulationPyramid, RadarChart } from 'react-native-gifted-charts'

const Stats = () => {
    const data=[ {value:50}, {value:80}, {value:90}, {value:70},{value:50}, {value:80}, {value:90}, {value:70} ]
    return (
        <View className='flex-1'>
            <Text className='text-white font-medium text-2xl mt-5'>Stats</Text>
            <View className='w-full border border-[#BFC5CC]/50 mt-4 mb-2' />
            <View className='flex-row w-full p-1 '>
                <View className='flex-1'>
                    <Text className='text-[#D1D6DB] text-xl'>Matches Played</Text>
                    <Text className='text-white text-xl'>32</Text>
                </View>
                <View className='flex-1'>
                    <Text className='text-[#D1D6DB] text-xl'>Goals</Text>
                    <Text className='text-white text-xl'>15</Text>
                </View>
            </View>
            <View className='w-full border border-[#BFC5CC]/50 mt-4 mb-2' />
            <View className='flex-row w-full p-1 '>
                <View className='flex-1'>
                    <Text className='text-[#D1D6DB] text-xl'>Assists</Text>
                    <Text className='text-white text-xl'>32</Text>
                </View>
                <View className='flex-1'>
                    <Text className='text-[#D1D6DB] text-xl'>Minutes</Text>
                    <Text className='text-white text-xl'>15</Text>
                </View>
            </View>
            <View className='w-full border border-[#BFC5CC]/50 mt-4 mb-2' />
            <View className='flex-row w-full p-1 '>
                <View className='flex-1'>
                    <Text className='text-[#D1D6DB] text-xl'>Accuracy %</Text>
                    <Text className='text-white text-xl'>32</Text>
                </View>
                <View className='flex-1'>
                    <Text className='text-[#D1D6DB] text-xl'>Speed (km/h)</Text>
                    <Text className='text-white text-xl'>15</Text>
                </View>
            </View>
            <TouchableOpacity className="mt-4 mb-3 p-3 items-center bg-[#062AD6] rounded-lg overflow-hidden" >
                <Text className="text-white text-xl font-instrumentSansBold" >Claim Reward</Text>
            </TouchableOpacity>
            <Text className='text-white font-medium text-xl mt-5'>XP/Goals Last 6 Weeks</Text>
            <Text className='text-white font-medium text-2xl mt-2'>+15%</Text>
            <Text className='text-[#BFC5CC] font-medium text-2xl mt-2'>Last 6 Weeks<Text className='text-[#0AD921]'>{" "}+15%</Text></Text>
           



            <LineChart data={data} curved 
            thickness={5} color="#2444FF"  areaChart startFillColor="rgba(74,144,226,0.3)" endFillColor="rgba(74,144,226,0.05)" hideRules hideYAxisText  startOpacity={0.7} endOpacity={0.1} height={200} width={300} />

        </View>
    )
}

export default Stats