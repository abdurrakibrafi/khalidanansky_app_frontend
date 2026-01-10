import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import Video from 'react-native-video';
import { AntDesign, EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ShortVideo = () => {
    const navigation = useNavigation()
    const [react, setReact] = useState(false)
    return (
        <LinearGradient colors={["#00084F", "#010531"]} style={{ flex: 1 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>

            <SafeAreaView style={{ flex: 1, padding: 5 }}>
                <View className='flex-1 '>

                    <Video
                        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
                        style={{ width: '100%', flex: 1, position: 'relative' }}
                        resizeMode='cover'
                        controls
                    />
                    <View className='w-full p-3 absolute flex-row items-center justify-between'>
                        <TouchableOpacity className='' onPress={() => navigation.goBack()}>
                            <Ionicons name="chevron-back" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <EvilIcons name="search" size={24} color="white" />
                        </TouchableOpacity>

                    </View>
                    <View className=' p-3 absolute flex-col right-0 bottom-48 '>
                        <TouchableOpacity onPress={() => setReact(!react)}>
                            {react ? <AntDesign name="heart" size={24} color="#2444FF" /> : <AntDesign name="heart" size={24} color="#ffffff" />}
                        </TouchableOpacity>
                        <Text className='text-white'>56.8k</Text>
                    </View>
                    <TouchableOpacity className=' p-3 absolute flex-col right-0 bottom-28 '>
                        <Image source={require("../../../assets/scout/shahriar.jpeg")} style={{ width: 44, height: 44, borderRadius: 50, borderColor: "#C8592A", borderWidth: 1 }} />
                        <View className='absolute bottom-0 right-5 bg-white w-[26px] h-[26px] rounded-full items-center justify-center'>
                            <MaterialIcons name="add-circle" size={26} color="#2444FF" />
                        </View>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </LinearGradient>
    )
}

export default ShortVideo