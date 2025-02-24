import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles';
import { Colors } from '@/constants/Colors';


interface CalculatorButtonProps {
    text: string;
    color?: string;
    blackText?: boolean;
    width?: number;
    height?: number;
    onPressAction?: () => void;
}

const CalculatorButton = ({text, color = Colors.darkGray, blackText = false, onPressAction}:CalculatorButtonProps) => {
  return (
    <Pressable 
        style={[globalStyles.button, {backgroundColor: color}]}
        onPress={onPressAction}
        >
        <Text style={{
            ...globalStyles.buttonText,
            color: blackText ? Colors.background : Colors.textPrimary,
            // 
           
        }} >{text}</Text>
    </Pressable>
  )
}

export default CalculatorButton