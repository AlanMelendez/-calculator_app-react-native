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
    //TODO: Implement the logic to build the number (calculate subresults)
    setFormula(number);
  }, [number]);

  const buildNumber = (textNumber: string) => {
    // Do not accept multiple decimal points
    if (number.includes(".") && textNumber === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (textNumber === ".") {
        setNumber(number + textNumber); // Allow "0."
        return;
      }

      // Append zero only if a decimal exists
      if (textNumber === "0" && number.includes(".")) {
        setNumber(number + textNumber); // "0." + "0" → "0.0"
        return;
      }

      // Replace leading "0" with a new digit
      if (textNumber !== "0" && !number.includes(".")) {
        setNumber(textNumber); // "0" + "1" → "1"
        return;
      }

      // Prevent multiple leading zeros (e.g., "000")
      if (textNumber === "0" && !number.includes(".")) {
        return;
      }

      // Append valid numbers after decimal point
      if (textNumber !== "0" && number.includes(".")) {
        setNumber(number + textNumber); // "0." + "1" → "0.1"
        return;
      }
    }

    // Default case: Concatenate valid numbers
    setNumber((prevNumber) =>
      prevNumber === "0" ? textNumber : prevNumber + textNumber
    ); // "0" replaced when another number is pressed
  };

  return {
    formula,
    number,
    previousNumber,
    lasOperation,

    //Functions
    buildNumber,
  };
};
