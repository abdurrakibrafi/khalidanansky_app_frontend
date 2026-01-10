import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, Entypo } from '@expo/vector-icons'
import CreateProductSelecPicker from 'src/components/ui/products/CreateProductSelecPicker'

const BuildIdentity = () => {
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
            headerTitle: 'Build your Identity',
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

                <Text className='text-white font-bold text-4xl text-center'>Create your Player Card</Text>
                <Text className='text-[#CBD5E1] text-center text-xl mt-2 mb-5'>
                    Craft your unique football identity. Showcase your skills, nationality, and more.
                </Text>
                <Text className='text-[#ffffff] text-xl font-bold mb-4'>Upload  Player Photo</Text>

                <View style={{ width: 66, height: 66 }} className='relative'>
                    <Image source={require("../../../assets/scout/uploadImg.png")} style={{ width: "100%", height: "100%" }} />
                    <TouchableOpacity style={{ width: 28, height: 28 }} className='absolute -right-2 -bottom-2 bg-[#81859D] p-1 rounded-md'>
                        <Image source={require("../../../assets/scout/uploadIcon.png")} style={{ width: "100%", height: "100%" }} />
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={{ marginTop: 40, paddingBottom: 150 }}>
                    <Text className='text-white font-bold text-xl mb-2'>Your Name</Text>
                    <TextInput placeholder='Enter your name' placeholderTextColor={"#CBD5E1"} style={{ color: "#CBD5E1", fontSize: 20 }} />
                    <View className='w-full border border-[#BFC5CC] mb-4 mt-3' />

                    <Text className="text-white font-bold text-xl mb-2">
                        Nationality
                    </Text>
                    <View className="flex-row items-center  gap-4 border rounded-xl  px-1">
                        <CreateProductSelecPicker
                            displayKey={"bust_range_cm"}
                        />
                        <AntDesign name="down" size={24} color="white" />
                    </View>
                    <View className='w-full border border-[#BFC5CC] mb-4 mt-3' />
                    <Text className="text-white font-bold text-xl mb-2">
                        Nationality
                    </Text>
                    <View className="flex-row items-center  gap-4 border rounded-xl  px-1">
                        <CreateProductSelecPicker
                            displayKey={"bust_range_cm"}
                        />
                        <AntDesign name="down" size={24} color="white" />
                    </View>
                    <View className='w-full border border-[#BFC5CC] mb-4 mt-3' />
                    <Text className="text-white font-bold text-xl mb-2">
                        Primary Position
                    </Text>
                    <View className="flex-row items-center  gap-4 border rounded-xl  px-1">
                        <CreateProductSelecPicker
                            displayKey={"bust_range_cm"}
                        />
                        <AntDesign name="down" size={24} color="white" />
                    </View>
                    <View className='w-full border border-[#BFC5CC] mb-4 mt-3' />
                    <Text className="text-white font-bold text-xl mb-2">
                        Secondary Position
                    </Text>
                    <View className="flex-row items-center  gap-4 border rounded-xl  px-1">
                        <CreateProductSelecPicker
                            displayKey={"bust_range_cm"}
                        />
                        <AntDesign name="down" size={24} color="white" />
                    </View>
                    <View className='w-full border border-[#BFC5CC] mb-4 mt-3' />
                    <Text className="text-white font-bold text-xl mb-2">
                        Favorite Foot
                    </Text>
                    <View className="flex-row items-center  gap-4 border rounded-xl  px-1">
                        <CreateProductSelecPicker
                            displayKey={"bust_range_cm"}
                        />
                        <AntDesign name="down" size={24} color="white" />
                    </View>
                    <View className='w-full border border-[#BFC5CC] mb-4 mt-3' />

                </ScrollView>
                <TouchableOpacity className="mt-2 mb-3 p-3 items-center bg-[#062AD6] rounded-lg overflow-hidden " onPress={() => navigation.navigate("Tier Initialize")}>
                    <Text className="text-white text-xl font-instrumentSansBold" >Next</Text>
                </TouchableOpacity>

            </LinearGradient>
        </View>
    )
}

export default BuildIdentity