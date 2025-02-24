import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
        <ThemeText>
          500
        </ThemeText>
        <ThemeText variant="secondary">
          400
        </ThemeText>


    </View>
  )
}

export default CalculatorApp