import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { RFValue } from "./responsive/responsiveFont";
interface Props {
    text:string,
    onPress?:()=>void
}
function Button(props:Props):JSX.Element{
    const [pressed, setPressed] = useState<boolean>(false)
    function onPressIn():void{
        setPressed(true)
    }
    function onPressOut():void{
        setPressed(false)
    }
    return <Pressable style={[styles.buttonContainer, pressed?styles.buttonPressed:null]} onPress={props.onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
        <Text style={styles.buttonText}>{props.text}</Text>
    </Pressable>
}
export default Button;
const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:"#fc452b",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    buttonPressed:{
        backgroundColor:"#ab200c"
    },
    buttonText:{
        width:"100%",
        color:"white",
        fontSize:RFValue(40),
        fontWeight:"bold",
        textAlign:"center"
    }
})