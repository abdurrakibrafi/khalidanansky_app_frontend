import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons'
import CreateProductSelecPicker from 'src/components/ui/products/CreateProductSelecPicker'

const Language = () => {

    const [toggleLan, setToggleLan] = useState(false)

    const navigation = useNavigation()

    const [isCheck, setIsCheck] = useState(false)

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
            headerTitle: 'Language',
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

               <View className='flex-col justify-between  flex-1'>
                 <View className=' w-full  right-2 rounded-md p-3'>
                    <TouchableOpacity className='flex-row p-3 justify-between'>
                        <View className='flex-row items-center gap-3'>
                            <Image source={require("../../../assets/scout/eng.png")} style={{ width: 20, height: 20, borderRadius: 50 }} />
                            <Text className='text-white text-2xl'>English</Text>
                        </View>
                        <Entypo name="circle" size={24} color="white" />
                    </TouchableOpacity>
                    <View className='w-full border border-[#D1D6DB]/50 mb-1' />
                    <TouchableOpacity className='flex-row p-3 justify-between'>
                        <View className='flex-row items-center gap-3'>
                            <Image source={require("../../../assets/scout/eng.png")} style={{ width: 20, height: 20, borderRadius: 50 }} />
                            <Text className='text-white text-2xl'>Arabic</Text>
                        </View>
                        <Entypo name="circle" size={24} color="white" />
                    </TouchableOpacity>
                    <View className='w-full border border-[#D1D6DB]/50 mb-1' />
                    <TouchableOpacity className='flex-row p-3 justify-between'>
                        <View className='flex-row items-center gap-3'>
                            <Image source={require("../../../assets/scout/eng.png")} style={{ width: 20, height: 20, borderRadius: 50 }} />
                            <Text className='text-white text-2xl'>Franch</Text>
                        </View>
                        <Entypo name="circle" size={24} color="white" />
                    </TouchableOpacity>
                    <View className='w-full border border-[#D1D6DB]/50 mb-1' />
                </View>

                <TouchableOpacity className="mt-2 mb-3 p-3 items-center bg-[#062AD6] rounded-lg overflow-hidden " >
                    <Text className="text-white text-xl font-instrumentSansBold" >Save Changes</Text>
                </TouchableOpacity>
               </View>
            </LinearGradient>
        </View>
    )
}

export default Language