import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: Colors.background
    },
    calculatorContainer:{
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    mainResult:{
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        marginRight: 20,
        fontWeight: 'bold'
    },
    secondaryResult:{
        color: Colors.textSecondary,
        fontSize: 50,
        textAlign: 'right',
        marginRight: 20
    },
})