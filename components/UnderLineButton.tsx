import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { RFValue } from "./responsive/responsiveFont";
interface Props {
    text:string;
    onPress?:()=>void;
}function UnderLineButton(props:Props):JSX.Element{
    const [pressed, setPressed] = useState<boolean>(false)
    function onPressIn():void{
        setPressed(true)
    }
    function onPressOut():void{
        setPressed(false)
    }
    return <Pressable onPressIn={onPressIn} onPressOut={onPressOut} style={styles.container} onPress={props.onPress}>
        <Text style={[styles.text,pressed?{color:"#8e6ef5"}:null]}>{props.text}</Text>
    </Pressable>
}
export default UnderLineButton;
const styles = StyleSheet.create({
    container:{
        paddingVertical:RFValue(10),
    },
    text:{
        borderBottomColor:"#784dfa",
        color:"#784dfa",
        fontSize:RFValue(20),
        borderBottomWidth:2,
    }
})