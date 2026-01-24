import { AntDesign, EvilIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const MapScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'transparent'
            },
            headerTransparent: true,
            headerTintColor: "#fff",
            headerTitle: 'My Roaster ',
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

    const [isOrderPlaced, setIsOrderPlaced] = useState(false)

    const pickupLocation = {
        latitude: 23.7805733,
        longitude: 90.4195402,
    };

    const deliveryLocation = {
        latitude: 23.8748575,
        longitude: 90.3984187,
    };

    return (
        <View className="flex-1 ">
            {/* Top text overlay */}


            {/* Map itself */}
            <MapView
                style={{ width: '100%', height: '100%' }}
                initialRegion={{ latitude: 23.825, longitude: 90.41, latitudeDelta: 0.1, longitudeDelta: 0.1, }}
                customMapStyle={[{ "elementType": "geometry", "stylers": [{ "color": "#212121" }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
                { "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#212121" }] },
                { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#383838" }] }, {
                    "featureType": "water", "elementType": "geometry", "stylers":
                        [{ "color": "#000000" }]
                }]}
            >
                <Marker coordinate={pickupLocation} title="Pickup" description="Gulshan" />
                <Marker coordinate={deliveryLocation} title="Delivery" description="Uttara" />
                <Polyline
                    coordinates={[pickupLocation, deliveryLocation]}
                    strokeColor="#0E7AFE"
                    strokeWidth={3}
                />
            </MapView>
            <View className="absolute top-14 left-0 right-0 items-center z-10 w-full  px-3 flex-row  p-3 ">

                <TouchableOpacity className=' left-0' onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-sharp" size={24} color="white" />
                </TouchableOpacity>
                <Text className="text-2xl font-interBold text-[#ffffff]   text-center right-0 left-0 absolute">Player Heat Map</Text>

            </View>

            <View className='absolute top-36 left-0 right-0 z-10 border-2 border-[#19205A] bg-[#19205A]/80 rounded-full p-3 flex-row  items-center gap-2  m-3'>
                <EvilIcons name="search" size={24} color="#D1D6DB" />
                <TextInput className='flex-1 ' placeholder='Search Players' placeholderTextColor={"#D1D6DB"} style={{ color: "#D1D6DB" }} />
            </View>

            <View className='absolute  w-[15%] bottom-44    right-2 px-3  gap-3 py-2 flex-col items-center'

            >
                <TouchableOpacity className='bg-[#2444FF] p-2 items-center mb-1 rounded-tl-xl rounded-tr-xl overflow-hidden'>
                    <FontAwesome name="plus" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity className='bg-[#2444FF] p-2 items-center mb-2 rounded-bl-xl rounded-br-xl overflow-hidden'>
                    <FontAwesome name="minus" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity className='bg-[#2444FF] p-2 items-center mb-2 rounded-xl overflow-hidden'>
                <FontAwesome name="send" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View className='absolute bg-[#19205A] w-[100%] bottom-0   left-0 right-0 px-3  gap-3 py-2 flex-row'

            >
                <View className='p-3 flex-row  items-center w-full'>
                    <View className='flex-1'>
                        <Text className='text-xl font-bold text-white mt-2 mb-2'>Activity Level</Text>
                        <View className='flex-row p-1 gap-2 items-center'>
                            <FontAwesome name="circle" size={18} color="#2444FF" />
                            <Text className='text-xl font-bold text-white'>Low</Text>
                            <FontAwesome name="circle" size={18} color="#F0B100" />
                            <Text className='text-xl font-bold text-white'>Medium</Text>
                            <FontAwesome name="circle" size={18} color="#F12B34" />
                            <Text className='text-xl font-bold text-white'>High</Text>
                        </View>
                    </View>
                    <View style={{ width: 15, height: 15, overflow: "hidden", borderColor: "white" }}>
                        <Image source={require("../../../assets/scout/Maskgroup.png")} style={{ width: "100%", height: "100%" }} />
                    </View>
                </View>
            </View>

        </View>
    );
};

export default MapScreen;