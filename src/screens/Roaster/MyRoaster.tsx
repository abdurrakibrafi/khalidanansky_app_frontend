import { View, Text, TouchableOpacity, ScrollView, Image, FlatList, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import { recommendedList } from 'src/constants/demodata'
import { verticalScale } from 'react-native-size-matters'

const MyRoaster = () => {

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
      headerTintColor: "#fff",
      headerTitle: 'My Roaster',
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
      <TouchableOpacity style={{ flex: 1, height: 198, borderRadius: 20, overflow: "hidden", margin: 5 }} onPress={()=>navigation.navigate("Profile Details")}>
        <Image source={item.image} style={{ width: "100%", height: 148 }} resizeMode="cover" />
        <View className='bg-[#2444FF] p-1' style={{ height: 50 }}>
          <Text className='text-white font-normal'>Ranking</Text>
          <Text className='text-white font-bold'>#28</Text>
        </View>
      </TouchableOpacity>);
  };

  return (
    <LinearGradient colors={["#00084F", "#010531"]} style={{ flex: 1, padding: 10 }} start={{ x: 0, y: 1 }} end={{ x: 0, y: 1 }}>

      <View className=' border-2 border-[#19205A] rounded-full p-3 flex-row  items-center gap-2 '>
        <EvilIcons name="search" size={24} color="#D1D6DB" />
        <TextInput className='flex-1 ' placeholder='Search Players' placeholderTextColor={"#D1D6DB"} style={{ color: "#D1D6DB" }} />
      </View>

      <Text className='text-white font-bold text-2xl m-[5px] mt-4'>Represented Players</Text>
      <FlatList
        data={recommendedList}
        renderItem={listView}
        numColumns={2}
      />
    </LinearGradient>
  )
}

export default MyRoaster