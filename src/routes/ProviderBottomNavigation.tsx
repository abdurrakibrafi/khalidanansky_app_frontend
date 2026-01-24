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
import MapScreen from "src/screens/Map/Map";

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
  const role=useAppSelector((state)=>state.auth.userType)

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
              <View style={{ alignItems: "center",gap:2 }} className="">
                {focused?<Image source={require("../../assets/scout/scHomeAc.png")} style={{ width: 24, height: 24 }} />:<Image source={require("../../assets/scout/scoutHomeInactive.png")} style={{ width: 24, height: 24 }} />}
                {focused ? <Text className="text-center w-[50]" style={{ color: "#FFFFFF", fontSize: 10 }}>Home</Text>:<Text className="text-center w-[50] text-[#fff]/65" style={{  fontSize: 10 }}>Home</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />

         {role==2 && <BottomTabs.Screen
          name="Map"
          component={MapScreen}
          
          options={{
            headerShown:false,
            tabBarIcon: ({ focused}) => (
               <View style={{ alignItems: "center",gap:2 }} className="">
                {focused?<Image source={require("../../assets/scout/scMap.png")} style={{ width: 24, height: 24 }} />:<Image source={require("../../assets/scout/scMapInactive.png")} style={{ width: 24, height: 24 }} />}
                {focused ? <Text className="text-center w-[50]" style={{ color: "#FFFFFF", fontSize: 10 }}>Map</Text>:<Text className="text-center w-[50] text-[#fff]/65" style={{  fontSize: 10 }}>Map</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />}


        {role==1 && <BottomTabs.Screen
          name="Confirmation"
          component={Confirmation}
          options={{
            tabBarIcon: ({ focused}) => (
               <View style={{ alignItems: "center",gap:2 }} className="">
                {focused?<Image source={require("../../assets/scout/confirmAxc.png")} style={{ width: 24, height: 24 }} />:<Image source={require("../../assets/scout/confirmIn.png")} style={{ width: 24, height: 24 }} />}
                {focused ? <Text className="text-center w-[90]" style={{ color: "#FFFFFF", fontSize: 10 }}>Confirmation</Text>:<Text className="text-center w-[90] text-[#fff]/65" style={{  fontSize: 10 }}>Confirmation</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />}

       {role==2 && <BottomTabs.Screen
          name="Roaster"
          component={MyRoaster}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center",gap:2 }} className="">
                {focused?<Image source={require("../../assets/scout/roasterActiveSc.png")} style={{ width: 24, height: 24 }} />:<Image source={require("../../assets/scout/scROasterInactive.png")} style={{ width: 24, height: 24 }} />}
                {focused ? <Text className="text-center w-[50]" style={{ color: "#FFFFFF", fontSize: 10 }}>My Roaster</Text>:<Text className="text-center w-[50] text-[#fff]/65" style={{  fontSize: 10 }}>My Roaster</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />}

         <BottomTabs.Screen
          name="LeaderBoard"
          component={LeaderBoard}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center",gap:2 }} className="">
                {focused?<Image source={require("../../assets/scout/scLbAc.png")} style={{ width: 24, height: 24 }} />:<Image source={require("../../assets/scout/scLbIn.png")} style={{ width: 24, height: 24 }} />}
                {focused ? <Text className="text-center w-[90]" style={{ color: "#FFFFFF", fontSize: 10 }}>Leader Board</Text>:<Text className="text-center w-[90] text-[#fff]/65" style={{  fontSize: 10 }}>Leader Board</Text>}
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
              <View style={{ alignItems: "center",gap:2 }} className="">
                {focused?<Image source={require("../../assets/scout/profileAc.png")} style={{ width: 24, height: 24 }} />:<Image source={require("../../assets/scout/profileIn.png")} style={{ width: 24, height: 24 }} />}
                {focused ? <Text className="text-center w-[90]" style={{ color: "#FFFFFF", fontSize: 10 }}>Profile</Text>:<Text className="text-center w-[90] text-[#fff]/65" style={{  fontSize: 10 }}>Profile</Text>}
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />


      </BottomTabs.Navigator>
    </View>
  );
};
