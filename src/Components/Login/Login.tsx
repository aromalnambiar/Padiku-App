import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Color from '../../Color/Color';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  return (
    <View>
        <Image source={require('../../Assets/Images/login.png')} />
        <View style={styles.Container} className='pt-20' >
            <Text className='text-[40px] text-center pb-[28%] ' >
                Welcome To Padiku App
            </Text>
            <View>
                <Text className='text-center text-[20px] font-bold' >Login/Signup</Text>
                <LinearGradient
                colors={['#0C7DE4', '#12B3C9']}
                start={[0, 0]}
                end={[1, 0]}
                className='mt-5 rounded-md'
                >
                <View className='p-4 rounded-[10px] items-center justify-center flex flex-row' style={styles.LoginContainer} >
                    <AntDesign name="google" size={24} color="white" />
                    <Text className='text-white ml-3' >Sign In With Google </Text>
                </View>
                </LinearGradient>
            </View>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    padding: 40,
    marginTop: -25,
    backgroundColor: Color.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  LoginContainer: {

  }
})
