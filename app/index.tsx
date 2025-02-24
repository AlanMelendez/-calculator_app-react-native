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
        <CalculatorButton text="C" blackText color={Colors.lightGray}  onPressAction={()=> console.log('C')} />
        <CalculatorButton text="+/-" blackText color={Colors.lightGray} onPressAction={()=> console.log('hola')} />
        <CalculatorButton text="del" blackText color={Colors.lightGray} onPressAction={()=> console.log('hola')} />
        <CalculatorButton text="/"  color={Colors.orange}  onPressAction={()=> console.log('hola')} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton text="7" onPressAction={()=> console.log('hola')} />
        <CalculatorButton text="8" onPressAction={()=> console.log('hola')} />
        <CalculatorButton text="9" onPressAction={()=> console.log('hola')} />
        <CalculatorButton text="X"  onPressAction={()=> console.log('hola')}  color={Colors.orange}   />

      </View>
      <View style={globalStyles.row}>
        <CalculatorButton text="4" onPressAction={()=> console.log('hola')} />
        <CalculatorButton text="5" onPressAction={()=> console.log('hola')} />
        <CalculatorButton text="6" onPressAction={()=> console.log('hola')} />
        <CalculatorButton text="-" onPressAction={()=> console.log('hola')}  color={Colors.orange}  />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton text="1" onPressAction={()=> console.log('hola')} />
        <CalculatorButton text="2" onPressAction={()=> console.log('hola')} />
        <CalculatorButton text="3" onPressAction={()=> console.log('hola')} />
        <CalculatorButton text="+" onPressAction={()=> console.log('hola')}  color={Colors.orange}  />
      </View>
      <View style={globalStyles.row}>

      </View>
      <View style={globalStyles.row}>
        <CalculatorButton text="0" onPressAction={()=> console.log('hola')} doublesSize />
        <CalculatorButton text="." onPressAction={()=> console.log('hola')} />
        <CalculatorButton text="=" onPressAction={()=> console.log('hola')}  color={Colors.orange}  />
      </View>
    </View>


    // ROWS OF BUTTONS:
    
   
  )
}

export default CalculatorApp