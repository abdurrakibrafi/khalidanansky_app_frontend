import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";
import { NavigationProp } from "src/types/auth";

const OnBoarding = () => {
  const navigation = useNavigation<NavigationProp>()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
    });
  }, [navigation]);

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (

    <SafeAreaView className="flex-1 bg-[#121212] ">
      <ImageBackground
        source={require("../../../assets/scout/scoutBg.png")}
        style={{ flex: 1, width: "100%", height: "100%" }}
        resizeMode="cover"
      >
        <View className="flex-1 items-center justify-around px-4 mb-5 p-3 ">
          <View className="w-full ">
            <View style={{ width: scale(350), height: verticalScale(80) }} >
              <Image source={require("../../../assets/scout/scLogo.png")} style={{ width: "100%", height: "100%" }} resizeMode="contain" />
            </View>
          </View>





          <View className="w-full mt-2 rounded-lg overflow-hidden mb-2">
            <Text className="text-white font-interBold text-5xl mb-3">Log In</Text>
            <Text className="text-white mt-3 mb-2">Email</Text>
            <TextInput className="mt-2 mb-2" placeholder="Enter Your E-mail" placeholderTextColor={"#CBD5E1"} style={{ color: "#CBD5E1" }} />
            <LinearGradient
              colors={["#062AD6", "#062AD6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="w-full rounded-lg mt-2 overflow-hidden"
            >
              <TouchableOpacity className="w-full items-center p-3 rounded-lg bg-transparent overflow-hidden" onPress={() => navigation.navigate("OTP Screen")}>
                <Text className="text-white font-semibold font-instrumentSansBold">Continue</Text>
              </TouchableOpacity>
            </LinearGradient>
            <View className="w-full mt-4 mb-2 flex-row items-center">
              <View className="flex-1 border-t border-[#7F7F7F]" />
              <Text className="px-2 text-white">Or Sign in with</Text>
              <View className="flex-1 border-t border-[#7F7F7F]" />
            </View>
            <View className="items-center mt-2 mb-2">
              <TouchableOpacity>
                <Image source={require("../../../assets/scout/ggle.png")} style={{ width: 48, height: 48 }} />
              </TouchableOpacity>
            </View>

          </View>


        </View>
      </ImageBackground>
    </SafeAreaView>


  );
};

export default OnBoarding;
