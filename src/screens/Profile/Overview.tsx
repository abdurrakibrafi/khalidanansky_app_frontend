import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { useAppSelector } from 'src/redux/hooks'
import { AntDesign, Entypo, EvilIcons, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Overview = () => {
    const navigation = useNavigation()
    const userType = useAppSelector((state) => state.auth.userType)
    return (
        <View className='flex-1'>

            {userType == 1 ? <View>
                <View className='p-2 mb-2'>
                    <Text className='text-white font-medium text-2xl mt-2'>Playstyle</Text>
                    <View className='flex-row w-full p-2 gap-2'><Text className='text-[#CBD5E1] font-medium text-xl mt-2 border border-[#CBD5E1] p-1 rounded-xl'>Speedster</Text>
                        <Text className='text-[#CBD5E1] font-medium text-xl mt-2 border border-[#CBD5E1] p-1 rounded-xl'>Defender</Text>
                        <Text className='text-[#CBD5E1] font-medium text-xl mt-2 border border-[#CBD5E1] p-1 rounded-xl'>Dribbler</Text></View>
                </View>
                <Text className='text-white font-medium text-2xl mt-2'>Positions</Text>
                <View style={{ width: scale(335), height: verticalScale(335) }}>
                    <Image source={require("../../../assets/scout/Stage.png")} style={{ width: "100%", height: "100%" }} resizeMode='contain' />
                </View>
                <TouchableOpacity className="mt-2 mb-3 p-3 items-center bg-[#062AD6] rounded-lg overflow-hidden" >
                    <Text className="text-white text-xl font-instrumentSansBold" >View My Rank</Text>
                </TouchableOpacity>
            </View>
                : <View>
                    <Text className='text-white font-medium text-2xl mt-2'>Activity</Text>
                    <TouchableOpacity className='flex-row items-center justify-between w-full p-2 mt-2' onPress={()=>navigation.navigate("Shortlist")}>
                        <View className='flex-row items-center gap-2 p-2'>
                            <Ionicons name="menu-outline" size={24} color="#ffffff80" />
                            <Text className='text-white font-medium text-xl '>My ShortList</Text>
                        </View>
                        <Entypo name="chevron-small-right" size={24} color="white" />
                    </TouchableOpacity>
                    <View className='w-full border border-[#fff]/50 ' />
                    <TouchableOpacity className='flex-row items-center justify-between w-full p-2 mt-2' onPress={()=>navigation.navigate("My Tags")}>
                        <View className='flex-row items-center gap-2 p-2'>
                            <FontAwesome name="tags" size={24} color="#ffffff80" />
                            <Text className='text-white font-medium text-xl '>My Tags</Text>
                        </View>
                        <Entypo name="chevron-small-right" size={24} color="#ffffff80" />
                    </TouchableOpacity>
                    <View className='w-full border border-[#fff]/50 ' />
                    <TouchableOpacity className='flex-row items-center justify-between w-full p-2 mt-2' onPress={()=>navigation.navigate("My Contributions")}>
                        <View className='flex-row items-center gap-2 p-2'>
                            <FontAwesome5 name="users" size={24} color="#ffffff80" />
                            <Text className='text-white font-medium text-xl '>My Contributions</Text>
                        </View>
                        <Entypo name="chevron-small-right" size={24} color="#ffffff80" />
                    </TouchableOpacity>
                    <View className='w-full border border-[#fff]/50 ' />

                    <Text className='text-white font-medium text-2xl mt-4'>Account</Text>
                    <View className=' w-full p-2 mt-2'>
                        <View className='flex-row items-center gap-2 p-2'>
                            <Ionicons name="football-outline" size={24} color="#ffffff80" />
                            <View>
                                <Text className='text-white font-medium text-xl '>Verification Status</Text>
                                <Text className='text-[#52C41A] font-medium text-xl '>Verified</Text>
                            </View>
                        </View>

                    </View>
                    <View className='w-full border border-[#fff]/50 ' />
                    <View className=' w-full p-2 mt-2'>
                        <View className='flex-row items-center gap-2 p-2'>
                            <Ionicons name="football-outline" size={24} color="#ffffff80" />
                            <View>
                                <Text className='text-white font-medium text-xl '>Preferred Positions</Text>
                                <Text className='text-[#fff]/50 font-medium text-xl '>Forward, Midfielder</Text>
                            </View>
                        </View>

                    </View>
                    <View className='w-full border border-[#fff]/50 ' />
                    <View className=' w-full p-2 mt-2'>
                        <View className='flex-row items-center gap-2 p-2'>
                            <Ionicons name="football-outline" size={24} color="#ffffff80" />
                            <View>
                                <Text className='text-white font-medium text-xl '>Preferred Age Groups</Text>
                                <Text className='text-[#fff]/50 font-medium text-xl '>16-20</Text>
                            </View>
                        </View>

                    </View>
                    <View className='w-full border border-[#fff]/50 ' />
                    <View className=' w-full p-2 mt-2'>
                        <View className='flex-row items-center gap-2 p-2'>
                            <EvilIcons name="location" size={24} color="#ffffff80" />
                            <View>
                                <Text className='text-white font-medium text-xl '>Preferred Regions</Text>
                                <Text className='text-[#fff]/50 font-medium text-xl '>Greater London, South East</Text>
                            </View>
                        </View>

                    </View>
                    <View className='w-full border border-[#fff]/50 ' />

                </View>}
        </View>
    )
}

export default Overview