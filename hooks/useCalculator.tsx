import React, { Component, useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";


enum Operator {
    add = "+",
    subtract = "-",
    multiply = "x",
    divide = "/",
    percent = "%",
    equal = "=",
  }
  
  export const useCalculator = () => {
    const [formula, setFormula] = useState("0");
    const [number, setNumber] = useState("0");
    const [previousNumber, setPreviousNumber] = useState("0");
    
    const lasOperation = useRef<Operator>();
  
    useEffect(() => {
      if (lasOperation.current) {
        const firstFormulePart = formula.split(" ").at(0);
        setFormula(`${firstFormulePart} ${lasOperation.current} ${number}`);
      } else {
        setFormula(number);
      }
    }, [number]);
  
    useEffect(() => {
      if (lasOperation.current) {
        const subResult = calculateSub();
        setPreviousNumber(`${subResult}`);
      }
    }, [lasOperation.current]);
  
    const clearOperations = () => {
      setNumber("0");
      setPreviousNumber("0");
      setFormula("0");
      lasOperation.current = undefined;
    };
  
    const changeNumberSign = () => {
      if (number.includes("-")) {
        return setNumber(number.replace("-", ""));
      }
      return setNumber("-" + number);
    };
  
    const deleteLastOperation = () => {
      if (number.length === 1 || (number.length === 2 && number.includes("-"))) {
        setNumber("0");
      } else {
        setNumber(number.slice(0, -1));
      }
    };
  
    const setLastNumber = () => {
      calculate();
      if (number.endsWith(".")) {
        setNumber(number.slice(0, -1));
      }
      if (number !== "0") {
        setPreviousNumber(number);
      }
      setNumber("0");
    };
  
    const divideOperation = () => {
      setLastNumber();
      lasOperation.current = Operator.divide;
    };
  
    const multiplyOperation = () => {
      setLastNumber();
      lasOperation.current = Operator.multiply;
    };
  
    const addOperation = () => {
      setLastNumber();
      lasOperation.current = Operator.add;
    };
  
    const subtractOperation = () => {
      setLastNumber();
      lasOperation.current = Operator.subtract;
    };
  
    const calculateSub = () => {
      if (!lasOperation.current) return Number(number);
  
      const [firstValue, operator, secondValue] = formula.split(" ");
      const num1 = Number(firstValue);
      const num2 = Number(secondValue);
  
      if (isNaN(num1)) return 0;
      if (isNaN(num2)) return num1;
  
      switch (operator) {
        case Operator.add:
          return num1 + num2;
        case Operator.subtract:
          return num1 - num2;
        case Operator.multiply:
          return num1 * num2;
        case Operator.divide:
          return num2 !== 0 ? num1 / num2 : 0;
        default:
          return num1;
      }
    };
  
    const calculate = () => {
      const result = calculateSub();
      setFormula(`${result}`);
      if (result !== undefined) {
        setPreviousNumber(`${result}`);
      }
      lasOperation.current = undefined;
    };
  
    const buildNumber = (textNumber: string) => {
      if (number.includes(".") && textNumber === ".") return;
  
      if (number.startsWith("0") || number.startsWith("-0")) {
        if (textNumber === ".") {
          return setNumber(number + textNumber);
        }
        if (textNumber === "0" && number.includes(".")) {
          return setNumber(number + textNumber);
        }
        if (textNumber !== "0" && !number.includes(".")) {
          return setNumber(textNumber);
        }
        if (textNumber === "0" && !number.includes(".")) {
          return;
        }
      }
      setNumber(number + textNumber);
    };
  
    return {
      formula,
      number,
      previousNumber,
      lasOperation,
      buildNumber,
      clearOperations,
      changeNumberSign,
      deleteLastOperation,
      divideOperation,
      multiplyOperation,
      addOperation,
      subtractOperation,
      calculate,
    };
  };
  