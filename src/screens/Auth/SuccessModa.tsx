import { View, Text, Modal, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const SuccessModa = ({ visible, onClose }: any) => {
    const navigation = useNavigation()
    const [loading,setLoading]=useState(true)

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                onClose(); // close the modal
                setLoading(false)
                navigation.navigate("ChooseRole"); // navigate after closing
            }, 3000);
            // cleanup if modal closes early
            return () => clearTimeout(timer);
        }
    }, [visible, navigation, onClose]);

    return (
        <Modal visible={visible} onRequestClose={onClose} animationType="slide"
            transparent={true}>
            <View className='flex-1 items-center justify-center bg-[rgba(0,0,0,0.8)]'>
                <View className='bg-[#2444FF] rounded-lg p-4 items-center justify-around' style={{ width: scale(250), height: verticalScale(300) }}>
                    <Image source={require("../../../assets/scout/successmodal.png")} style={{ width: 100, height: 100 }} />
                    <Text className='text-white text-center font-interBold text-3xl'>Account  verified Successfully</Text>
                    {loading && <ActivityIndicator size={"small"} color={"white"}/>}
                </View>
            </View>
        </Modal>
    )
}

export default SuccessModa