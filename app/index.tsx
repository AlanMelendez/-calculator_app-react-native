import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {

     const {
          formula,
          number,
          buildNumber,
          clearOperations,
          changeNumberSign,

      } = useCalculator();
  
  
    

  return (

    // RESULTS:
    <View style={globalStyles.calculatorContainer}>

      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
        <ThemeText>
          {formula}
        </ThemeText>
        <ThemeText variant="secondary">
          {number}
        </ThemeText>
      </View>

      <View style={globalStyles.row} >
        <CalculatorButton text="C" blackText color={Colors.lightGray}  onPressAction={clearOperations} />
        <CalculatorButton text="+/-" blackText color={Colors.lightGray} onPressAction={changeNumberSign} />
        <CalculatorButton text="del" blackText color={Colors.lightGray} onPressAction={()=> console.log('hola')} />
        <CalculatorButton text="/"  color={Colors.orange}  onPressAction={()=> console.log('hola')} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton text="7" onPressAction={()=> buildNumber('7')} />
        <CalculatorButton text="8" onPressAction={()=> buildNumber('8')} />
        <CalculatorButton text="9" onPressAction={()=> buildNumber('9')} />
        <CalculatorButton text="X"  onPressAction={()=> console.log('hola')}  color={Colors.orange}   />

      </View>
      <View style={globalStyles.row}>
        <CalculatorButton text="4" onPressAction={()=> buildNumber('4')} />
        <CalculatorButton text="5" onPressAction={()=> buildNumber('5')} />
        <CalculatorButton text="6" onPressAction={()=> buildNumber('6')} />
        <CalculatorButton text="-" onPressAction={()=> console.log('hola')}  color={Colors.orange}  />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton text="1" onPressAction={()=> buildNumber('1')} />
        <CalculatorButton text="2" onPressAction={()=> buildNumber('2')} />
        <CalculatorButton text="3" onPressAction={()=> buildNumber('3')} />
        <CalculatorButton text="+" onPressAction={()=> console.log('hola')}  color={Colors.orange}  />
      </View>
      <View style={globalStyles.row}>

      </View>
      <View style={globalStyles.row}>
        <CalculatorButton text="0" onPressAction={()=> buildNumber('0')} doublesSize />
        <CalculatorButton text="." onPressAction={()=> buildNumber('.')} />
        <CalculatorButton text="=" onPressAction={()=> console.log('hola')}  color={Colors.orange}  />
      </View>
    </View>


    // ROWS OF BUTTONS:
    
   
  )
}

export default CalculatorApp