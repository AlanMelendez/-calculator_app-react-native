import React, { Component, useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '/',
    percent = '%',
    equal = '='
}


export const useCalculator = () => {

    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');

    const lasOperation = useRef<Operator>();

    useEffect(() => {
        //TODO: Implement the logic to build the number (calculate subresults)
        setFormula(number);
    }, [number]);


    const buildNumber = (textNumber: string) => {

        console.log(textNumber);
    }


    return{
        formula,
        number,
        previousNumber,
        lasOperation,

        //Functions
        buildNumber
    };


}

