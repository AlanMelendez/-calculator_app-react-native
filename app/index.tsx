import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const CalculatorApp = () => {
  return (
    <View>
      <Text style={{fontSize: 
        20, textAlign: 'center', marginTop
        : 20, color: Colors.textPrimary,
        fontFamily: 'SpaceMono'
      }}>ESTA ES MI CALCULADORA</Text>
    </View>
  )
}

export default CalculatorApp