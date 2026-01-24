import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons'
import { ScrollView } from 'react-native'

const Terms = () => {
    
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
            headerTitle: 'Terms & Conditions',
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
  return (
        <View className='flex-1'>
            <LinearGradient
                colors={["#00084F", "#010531"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 1 }}
                className="flex-1"
                style={{ padding: 20 }}
            >
                {/* Header Line */}
                <View className='w-full border-t border-[#D1D6DB]/30 mb-6' />

                <Text className="text-white text-3xl font-bold mb-4">Terms of Service</Text>
                <Text className="text-gray-400 mb-6">Last Updated: January 2026</Text>

                <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
                    <View className="pb-10">
                        <Section 
                            title="1. Acceptance of Terms" 
                            content="By accessing or using this application, you agree to be bound by these terms. If you do not agree, please do not use the service." 
                        />
                        
                        <Section 
                            title="2. User Responsibilities" 
                            content="You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account." 
                        />

                        <Section 
                            title="3. Privacy Policy" 
                            content="Your use of the app is also governed by our Privacy Policy. Please review our policy to understand how we collect and use your data." 
                        />

                        <Section 
                            title="4. Limitations of Liability" 
                            content="We are not liable for any indirect, incidental, or consequential damages resulting from your use of the service." 
                        />

                        <Section 
                            title="5. Changes to Terms" 
                            content="We reserve the right to modify these terms at any time. We will notify users of any significant changes via the app interface." 
                        />
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    );
};

// Helper component for clean styling
const Section = ({ title, content }) => (
    <View className="mb-6">
        <Text className="text-[#D1D6DB] text-lg font-semibold mb-2">{title}</Text>
        <Text className="text-gray-300 leading-6">
            {content}
        </Text>
    </View>
);


export default Terms