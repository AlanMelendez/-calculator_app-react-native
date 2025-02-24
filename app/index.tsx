import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'

const CalculatorApp = () => {
  return (

    // RESULTS:
    <View style={globalStyles.calculatorContainer}>

      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
        <ThemeText>
          500
        </ThemeText>
        <ThemeText variant="secondary">
          400
        </ThemeText>
      </View>

      <View style={globalStyles.row} >
        <CalculatorButton text="C" blackText color={Colors.lightGray}  />
        <CalculatorButton text="+/-" blackText color={Colors.lightGray} />
        <CalculatorButton text="del" blackText color={Colors.lightGray} />
        <CalculatorButton text="/"  color={Colors.orange}  />
      </View>
      {/* <View style={globalStyles.row}>
        <CalculatorButton text="7" />
        <CalculatorButton text="8" />
        <CalculatorButton text="9" />
        <CalculatorButton text="X" />

      </View>
      <View style={globalStyles.row}>
        <CalculatorButton text="4" />
        <CalculatorButton text="5" />
        <CalculatorButton text="6" />
        <CalculatorButton text="-" />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton text="1" />
        <CalculatorButton text="2" />
        <CalculatorButton text="3" />
        <CalculatorButton text="+" />
      </View>
      <View style={globalStyles.row}>

      </View>
      <View style={globalStyles.row}>
        <CalculatorButton text="0" />
        <CalculatorButton text="." />
        <CalculatorButton text="=" />
      </View> */}
    </View>


    // ROWS OF BUTTONS:
    
   
  )
}

export default CalculatorApp