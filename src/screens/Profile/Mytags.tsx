import { View, Text, TouchableOpacity, ScrollView, Image, FlatList, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import { recommendedList } from 'src/constants/demodata'
import { verticalScale } from 'react-native-size-matters'

const MyTags = () => {

    const navigation = useNavigation()
    const [subSection, setSubSection] = useState("Contacted")

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
            headerTitle: 'My Tags',
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
            headerRight: () => (
                <TouchableOpacity className='p-3' onPress={() => navigation.navigate("Setting")}><AntDesign name="plus" size={24} color="white" /></TouchableOpacity>
            )
        })
    }, [navigation])

    const listView = ({ item }: { item: any }) => {
        return (
            <TouchableOpacity style={{ flex: 1, height: 198, borderRadius: 20, overflow: "hidden", margin: 5 }} onPress={() => navigation.navigate("My Contributions")}>
                <Image source={item.image} style={{ width: "100%", height: 148 }} resizeMode="cover" />
                <View className='bg-[#2444FF] p-1' style={{ height: 50 }}>
                    <Text className='text-white font-normal'>Ranking</Text>
                    <Text className='text-white font-bold'>#28</Text>
                </View>
            </TouchableOpacity>);
    };

    return (
        <LinearGradient colors={["#00084F", "#010531"]} style={{ flex: 1, padding: 10 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>

            <View className='flex-row mt-2 mb-3'>
                <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Contacted")}><Text className={`${subSection == "Contacted" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`}>Contacted</Text></TouchableOpacity>
                    <View className={`w-full border  ${subSection == "Contacted" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>

                <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Pending")}><Text className={`${subSection == "Pending" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`}>Pending</Text></TouchableOpacity>
                    <View className={`w-full border  ${subSection == "Pending" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>
                <View className='flex-1'><TouchableOpacity className='items-center' onPress={() => setSubSection("Rejected")}><Text className={`${subSection == "Rejected" ? "text-[#2444FF]" : "text-white"} text-center font-medium text-2xl`} >Rejected</Text></TouchableOpacity>
                    <View className={`w-full border  ${subSection == "Rejected" ? "border-[#2444FF]" : "border-white"} mt-2`} /></View>
            </View>
            <View className='flex-row items-center  gap-2 mb-3'>

                <TouchableOpacity className='flex-row gap-2 items-center border border-[#94A3B8] p-2 rounded-full flex-1 justify-center'><Text className='text-white font-medium text-xl'>Global</Text><AntDesign name="down" size={24} color="#94A3B8" /></TouchableOpacity>
                <TouchableOpacity className='flex-row gap-2 items-center border border-[#94A3B8] p-2 rounded-full flex-1 justify-center'><Text className='text-white font-medium text-xl'>Local</Text><AntDesign name="down" size={24} color="#94A3B8" /></TouchableOpacity>
                <TouchableOpacity className='flex-row gap-2 items-center border border-[#94A3B8] p-2 rounded-full flex-1 justify-center'><Text className='text-white font-medium text-xl'>Friends</Text><AntDesign name="down" size={24} color="#94A3B8" /></TouchableOpacity>
            </View>


            <FlatList
                data={recommendedList}
                renderItem={listView}
                numColumns={2}
            />
        </LinearGradient>
    )
}

export default MyTags