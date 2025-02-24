import { View, Text, type TextProps } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";

interface ThemeTextProps extends TextProps {
  // children: string; // This is the default type of children (react-native provide this type)
  variant?: "main" | "secondary";
}

const ThemeText = ({
  children,
  variant = "main",
  ...restProps
}: ThemeTextProps) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "main" ? globalStyles.mainResult : globalStyles.secondaryResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
