import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setUserType } from 'src/redux/features/auth/authSlice'

const dataForRole = {
  1: {
    image: require("../../../assets/scout/player.png"),
    name: "Player"
  },
  2: {
    image: require("../../../assets/scout/scout.png"),
    name: "Scout/Agent"
  },
}

const ChooseRole = () => {
  const navigation=useNavigation()
  const [userRole] = useState<number[]>([1, 2])
  const [role, setRole] = useState(0)
  const [toggleLan,setToggleLan]=useState(false)

  const dispatch=useDispatch()

  const handleRole=()=>{
    dispatch(setUserType(role))
    navigation.navigate(role==1?"Build Identity":"Profile Setup Agent")
  }
  
  return (
    <LinearGradient
      colors={["#00084F", "#010531"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 1 }}
      className="w-full "
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, padding: 10 }}>
        <View className='flex-col justify-between flex-1 relative w-full '>
          <TouchableOpacity className='absolute flex-row gap-3 top-2 right-2 bg-gray-400  p-1 items-center rounded-full' onPress={()=>setToggleLan(!toggleLan)}>
            <Image source={require("../../../assets/scout/eng.png")} style={{ width: 20, height: 20, borderRadius: 50 }} />
            <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
          </TouchableOpacity>

          {toggleLan&&<View className='bg-[#19205A] w-[200px] absolute top-20 right-2 rounded-md'>
            <TouchableOpacity className='flex-row p-3 justify-between'>
              <Image source={require("../../../assets/scout/eng.png")} style={{ width: 20, height: 20, borderRadius: 50 }} />
              <Text className='text-white'>English</Text>
              <Entypo name="circle" size={24} color="white" />
            </TouchableOpacity>
             <TouchableOpacity className='flex-row p-3 justify-between'>
              <Image source={require("../../../assets/scout/eng.png")} style={{ width: 20, height: 20, borderRadius: 50 }} />
              <Text className='text-white'>English</Text>
              <Entypo name="circle" size={24} color="white" />
            </TouchableOpacity>
             <TouchableOpacity className='flex-row p-3 justify-between'>
              <Image source={require("../../../assets/scout/eng.png")} style={{ width: 20, height: 20, borderRadius: 50 }} />
              <Text className='text-white'>English</Text>
              <Entypo name="circle" size={24} color="white" />
            </TouchableOpacity>
          </View>}
          <View className=' items-center justify-center'>
            <View style={{ width: scale(300), height: verticalScale(250), alignItems: "center", justifyContent: "center" }}>
              <Image source={require("../../../assets/scout/scLogo.png")} style={{ width: "100%", height: "100%" }} resizeMode='contain' />
            </View>

            <Text className='font-interBold text-white w-full text-4xl'>Welcome Back!</Text>
            <Text className='font-interBold text-white w-full text-xl'>Choose Your Role to Begin.</Text>
            <View className='w-full mt-4 '>
              {userRole?.map(item => (<TouchableOpacity className={`border ${item == role ? "border-[#1331E3]" : "border-white"} p-4 rounded-lg flex-row items-center justify-between mt-2 mb-2`} onPress={() => setRole(item)}>
                <View className='flex-row items-center gap-2'>
                  <Image source={dataForRole[item].image} style={{ width: 48, height: 48 }} />
                  <Text className='text-white font-bold'>{dataForRole[item].name}</Text>
                </View>
                {item == role ? <FontAwesome name="circle" size={24} color="white" /> : <Entypo name="circle" size={24} color="white" />}
              </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity className="mt-2 mb-3 p-3 items-center bg-[#062AD6] rounded-lg overflow-hidden" onPress={handleRole}>
            <Text className="text-white text-xl font-instrumentSansBold" >Continue</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </LinearGradient>

  )
}

export default ChooseRole