import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, Entypo } from '@expo/vector-icons'
import CreateProductSelecPicker from 'src/components/ui/products/CreateProductSelecPicker'

const TierInitialize = () => {
    const [tags] = useState(["Speedster", "Finisher", "Playmaker", "Strong", "Defender", "Goalkeeper", "Dribbler", "Creative"])
    const [selectedTags, setSelectedTags] = useState([])
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
            headerTintColor: "#FFFFFF",
            headerTitle: 'Tier Initialization',
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
                <TouchableOpacity className='flex-row gap-2 items-center p-2' onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-thin-left" size={24} color="white" />
                </TouchableOpacity>
            )
        })
    }, [navigation])
    const handleTags = (item: any) => {
        setSelectedTags((prev: any) => prev?.includes(item) ? prev.filter((tag: any) => tag !== item) : [...prev, item])
    }
    console.log(selectedTags, "tags..")
    return (
        <View className='flex-1 '>
            <LinearGradient
                colors={["#00084F", "#010531"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 1 }}
                className="w-full "
                style={{ flex: 1, paddingHorizontal: 15 }}
            >

                <View className='w-full border border-[#D1D6DB] mb-4' />



                <ScrollView contentContainerStyle={{ marginTop: 40, paddingBottom: 150 }}>
                    <Text className='text-white font-bold text-xl mb-2'>What's your height and weight?</Text>
                    <View className='flex-row  justify-between gap-2 mt-2'>
                        <View className='flex-col flex-1 gap-2'>
                            <TextInput placeholder='Height (cm)' placeholderTextColor={"#CBD5E1"} style={{ color: "#CBD5E1", fontSize: 20 }} />
                            <View className='w-full border border-[#BFC5CC] mb-4 mt-3' />
                        </View>
                        <View className='flex-col flex-1 gap-2'>
                            <TextInput placeholder='Weight (kg)' placeholderTextColor={"#CBD5E1"} style={{ color: "#CBD5E1", fontSize: 20 }} />
                            <View className='w-full border border-[#BFC5CC] mb-4 mt-3' />
                        </View>
                    </View>

                    <Text className="text-white font-bold text-xl mb-2">
                        Club Type
                    </Text>
                    <View className="flex-row items-center  gap-4 border rounded-xl  px-1">
                        <CreateProductSelecPicker
                            displayKey={"bust_range_cm"}
                        />
                        <AntDesign name="down" size={24} color="white" />
                    </View>
                    <View className='w-full border border-[#BFC5CC] mb-4 mt-3' />
                    <Text className='text-white font-bold text-xl mb-2'>Select up to 3 tags that best describe your play style</Text>
                    <View className='flex-row w-full flex-wrap gap-3 items-center justify-center mt-4'>
                        {tags?.map(item => <TouchableOpacity className={`border ${selectedTags?.includes(item) ? "border-[#2444FF]" : "border-white"} p-3 rounded-md`} onPress={() => handleTags(item)}><Text className='text-white font-medium text-xl'>{item}</Text></TouchableOpacity>)}
                    </View>

                    <Text className='text-white font-bold text-xl mb-2 mt-5'>Motto (Optional)</Text>
                    <TextInput placeholder='Dream. Train. Dominate.' placeholderTextColor={"#CBD5E1"} style={{ color: "#CBD5E1", fontSize: 20 }} />
                    <View className='w-full border border-[#BFC5CC] mb-4 mt-3' />
                </ScrollView>
                <TouchableOpacity className="mt-2 mb-3 p-3 items-center bg-[#062AD6] rounded-lg overflow-hidden " onPress={() => navigation.navigate("Tier Initialize")}>
                    <Text className="text-white text-xl font-instrumentSansBold" >Continue</Text>
                </TouchableOpacity>

            </LinearGradient>
        </View>
    )
}

export default TierInitialize