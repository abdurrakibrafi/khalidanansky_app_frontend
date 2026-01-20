import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  Ionicons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import NavRight from "src/components/shared/NavRight";
import { Image, Platform, Text, useWindowDimensions, View } from "react-native";
import { useAppSelector } from "src/redux/hooks";

const BottomTabs = createBottomTabNavigator();

import { TouchableOpacity } from 'react-native';
import { HomeScreen, Profile } from "src/screens";
import Bage from "src/screens/Bage/Bage";
import Feed from "src/screens/Feed/Feed";
import { DrawerNavigation } from "./DrawerNavigation";
import Search from "src/screens/Search/Search";
import ProviderHomePage from "src/screens/Home/ProviderHomePage";
import Products from "src/screens/Products/Products";
import Earning from "src/screens/Earning/Earning";
import LeaderBoard from "src/screens/LeaderBoard/LeaderBoard";
import Confirmation from "src/screens/Confirmation/Confirmation";
import MyRoaster from "src/screens/Roaster/MyRoaster";

const CustomTabBarButton = ({ children, onPress, accessibilityState }: any) => {
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      }}
    >
      {children}
    </TouchableOpacity>
  );
};


export const ProviderBottomNavigation = () => {


  const { width } = useWindowDimensions();

  return (
    <View className="bg-transparent flex-1">
      <BottomTabs.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            marginHorizontal: 7,
            marginBottom: Platform.OS === "android" ? 10 : 16,
            paddingBottom: 7,
            height: 68,
            backgroundColor: "#00084F",
            overflow: "hidden"
          },
          tabBarLabelStyle: {
            fontSize: width > 450 ? 14 : 12,
            width: "100%",
          },
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#C5BAFF",
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          tabBarLabelPosition: "below-icon",
          headerTintColor: "#5b21b6",
        }}
      >


        <BottomTabs.Screen
          name="Home"
          component={ProviderHomePage}
          options={{
            headerShown: false,
            headerTitle: () => null,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }} className="">
                <Image source={require("../../assets/e-icon/home-olive.png")} style={{ width: 24, height: 24 }} />
                {focused && <Text className="text-center w-[50]" style={{ color: "#FFFFFF",opacity:65, fontSize: 10 }}>Home</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />


        <BottomTabs.Screen
          name="Confirmation"
          component={Confirmation}
          options={{
            tabBarIcon: ({ focused}) => (
               <View style={{ alignItems: "center" }} className="">
              <Image source={require("../../assets/e-icon/earning-olive.png")} style={{ width: 24, height: 24 }} />
              {focused && <Text className="text-center w-[90]" style={{ color: "#2ECC71", fontSize: 10 }}>Confirmation</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />

        <BottomTabs.Screen
          name="Roaster"
          component={MyRoaster}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Image source={require("../../assets/e-icon/feed-olive.png")} style={{ width: 24, height: 24 }} />
                {focused && <Text className="text-center w-[90]" style={{ color: "#2ECC71", fontSize: 10 }}>My Roaster</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />

         <BottomTabs.Screen
          name="LeaderBoard"
          component={LeaderBoard}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Image source={require("../../assets/e-icon/feed-olive.png")} style={{ width: 24, height: 24 }} />
                {focused && <Text className="text-center w-[90]" style={{ color: "#2ECC71", fontSize: 10 }}>Leader Board</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />

        <BottomTabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }} className="">

                <Image source={require("../../assets/e-icon/profile-olive.png")} style={{ width: 24, height: 24 }} />
                {focused && <Text className="text-center w-[50]" style={{ color: "#2ECC71", fontSize: 10 }}>Profile</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />


      </BottomTabs.Navigator>
    </View>
  );
};
