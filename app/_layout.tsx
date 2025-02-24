import { View, Text, Platform } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { globalStyles } from '@/styles/global-styles'
import * as NavigationBar from 'expo-navigation-bar';

const isAndroid = Platform.OS === 'android';
if (isAndroid) {
  NavigationBar.setBackgroundColorAsync('#000000');
}

const RootLayout = () => {  

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    })

    if (!loaded) {
        return null
    }


  return (
    <View style={globalStyles.background}>
      <Text>_layout</Text>
        <Slot/>


     <StatusBar style="dark" />
    </View>
  )
}

export default RootLayout


