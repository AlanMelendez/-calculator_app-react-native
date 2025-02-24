import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
        <Text style={globalStyles.mainResult} numberOfLines={1} adjustsFontSizeToFit>200 x 293209382093802983902829083</Text>
        <Text style={globalStyles.secondaryResult}>50</Text>

    </View>
  )
}

export default CalculatorApp