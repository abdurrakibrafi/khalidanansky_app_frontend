import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { recommendedList } from 'src/constants/demodata';



const ProviderHomePage = () => {
    const navigation=useNavigation()
    const [react,setReact]=useState(false)

    return (
        <LinearGradient colors={["#00084F", "#010531"]} style={{ flex: 1 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>

            <SafeAreaView style={{ flex: 1, padding: 5 }}>

                <View className='flex-row items-center justify-between p-3'>
                    <View className='flex-row items-center gap-2'>
                        <Image source={require("../../../assets/scout/shahriar.jpeg")} style={{ width: 44, height: 44, borderRadius: 50, borderColor: "#C8592A", borderWidth: 1 }} />
                        <View>
                            <Text className='text-white'>Hi, Robert Cary</Text>
                            <Text className='text-white'>Midfielder | Forward</Text>
                        </View>
                    </View>

                    <View className='flex-row gap-2'>
                        <Image source={require("../../../assets/scout/scSrch.png")} style={{ width: 40, height: 40 }} />
                        <Image source={require("../../../assets/scout/Vector.png")} style={{ width: 35, height: 35 }} />
                    </View>
                </View>

                <ScrollView className='p-3 flex-1'>
                    <View className='flex-row  justify-between mb-2 w-full'><Text className='text-white font-medium text-xl'>Recommended Shorts</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate("Recommended List")}><Text className='text-white font-medium text-xl '>See All</Text></TouchableOpacity></View>
                    <ScrollView horizontal={true}>
                        <View className='flex-row gap-3'>
                            {recommendedList?.map(item => <TouchableOpacity>
                                <Image source={item?.image} style={{ width: scale(136), height: verticalScale(182), borderRadius: 15 }} />
                                <Text className='text-white text-xl font-medium mt-2'>{item?.name}</Text>
                                <Text className='text-white text-lg font-normal mt-1'>{item?.position}</Text>
                            </TouchableOpacity>)}
                        </View>
                    </ScrollView>

                    <View className='flex-col gap-3 mt-3'>
                        {recommendedList?.map(item => <TouchableOpacity>
                            <View className='flex-row items-center gap-2 mb-2 mt-2'>
                                <Image source={require("../../../assets/scout/shahriar.jpeg")} style={{ width: 44, height: 44, borderRadius: 50, borderColor: "#C8592A", borderWidth: 1 ,}} />
                                <View>
                                    <Text className='text-white'>Hi, Robert Cary</Text>
                                    <Text className='text-white'>Midfielder | Forward</Text>
                                </View>
                            </View>
                            <Image source={item?.image} style={{ width:"100%", height: verticalScale(182), borderRadius: 15,marginTop:10 }} />
                            <View className='mt-2 mb-1 flex-row w-[80px] p-2 gap-2 items-center'>
                                <TouchableOpacity onPress={()=>setReact(!react)}>
                                    {react?<AntDesign name="heart" size={24} color="#2444FF" />:<AntDesign name="heart" size={24} color="#ffffff" />}
                                </TouchableOpacity>
                                <Text className='text-white'>56.8k</Text>
                            </View>
                        </TouchableOpacity>)}
                    </View>

                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default ProviderHomePage