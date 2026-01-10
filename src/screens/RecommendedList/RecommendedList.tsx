import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons'
import { recommendedList } from 'src/constants/demodata'
import { scale, verticalScale } from 'react-native-size-matters'

const RecommendedList = () => {
    const navigation=useNavigation()
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
          headerTitle: 'Recommended Shorts',
          headerTitleAlign:'center',
          headerTitleStyle:{
            fontSize:20,
            fontFamily:"inter",
            color:"#fff",
            fontWeight:"900"
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
     <LinearGradient colors={["#00084F", "#010531"]} style={{ flex: 1 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <ScrollView className='p-3 flex-1'>
                        <View className='flex-row gap-3 flex-wrap items-center '>
                            {recommendedList?.map(item => <TouchableOpacity style={{width:"48%"}} onPress={()=>navigation.navigate("Short video")}>
                                <Image source={item?.image} style={{ width: "100%", height: verticalScale(182), borderRadius: 15 }} />
                                <Text className='text-white text-xl font-medium mt-2'>{item?.name}</Text>
                                <Text className='text-white text-lg font-normal mt-1'>{item?.position}</Text>
                            </TouchableOpacity>)}
                        </View>
                </ScrollView>
        </LinearGradient>
  )
}

export default RecommendedList