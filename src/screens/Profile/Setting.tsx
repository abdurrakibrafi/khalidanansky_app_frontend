import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'
import { settingItems } from 'src/constants/settingItems'
import { LinearGradient } from 'expo-linear-gradient'
import { scale } from 'react-native-size-matters'
import { setToken, setUserType } from 'src/redux/features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'src/redux/hooks'

const Setting = () => {
    const token=useAppSelector((state)=>state.auth.token)
    
    const navigation = useNavigation()
    const dispatch = useDispatch()
    console.log(token)

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
            headerTitle: 'Settings',
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
            ),
        })
    }, [navigation])

    const handleLogout=()=>{
    dispatch(setToken(null))
    dispatch(setUserType(null))
  }

    return (
        <View className='flex-1 items-center '>
            <LinearGradient
                colors={["#00084F", "#010531"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 1 }}
                className="w-full items-center"
                style={{ flex: 1, padding: 10 }}
            >
                <View className='w-full border border-[#D1D6DB] mb-4 ' />

                <View style={{ width: scale(100), height: scale(100), borderRadius: scale(100) / 2, overflow: "hidden", borderColor: "white", borderWidth: 5 }}><Image source={require("../../../assets/scout/Image.png")} style={{ width: "100%", height: "100%" }} /></View>
                <Text className='font-bold text-2xl text-white mt-3 text-center'>Hi, Robert Cary</Text>
                <Text className=' text-xl text-[#D1D6DB] mt-1 text-center'>XP: 12,345 / 15,000</Text>
                <Text className=' text-xl text-[#D1D6DB] mt-1 text-center'>Midfielder | Forward</Text>

                <View className='flex-1 mt-5 w-full p-3'>
                    {settingItems?.map(item => 
                    <>
                    <TouchableOpacity className='flex-row items-center justify-between w-full  m-2 mb-2' onPress={()=>navigation.navigate(item?.route)}>
                        <View className='flex-row gap-2 items-center'>
                            <Image source={item?.icon} style={{ width: 20, height: 20 }} />
                            <Text className=' text-xl text-[#D1D6DB] mt-1 text-center'>{item?.label}</Text>
                        </View>
                        <Entypo name="chevron-small-right" size={24} color="white" />
                    </TouchableOpacity>
                     <View className='w-full border border-[#D1D6DB] mb-4 ' />
                    </>
                )}
                <TouchableOpacity className='flex-row items-center justify-between w-full  m-2 mb-2' onPress={handleLogout}>
                        <View className='flex-row gap-2 items-center'>
                            <Image source={require("../../../assets/scout/scLog.png")} style={{ width: 20, height: 20 }} />
                            <Text className=' text-xl text-[#D1D6DB] mt-1 text-center'>Log out</Text>
                        </View>
                        <Entypo name="chevron-small-right" size={24} color="white" />
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        </View>
    )
}

export default Setting
         