import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { RFValue } from "./responsive/responsiveFont";
interface Props {
    text:string;
    onPress?:()=>void;
}
function SmallButton(props:Props):JSX.Element{
    const [pressed, setPressed] = useState<boolean>(false)
    function onPressIn():void{
        setPressed(true)
    }
    function onPressOut():void{
        setPressed(false)
    }
    return <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={props.onPress} style={[styles.container,pressed?{backgroundColor:"#8e6ef5"}:null]}>
        <Text style={styles.text}>{props.text}</Text>
    </Pressable>
}
export default SmallButton;
const styles = StyleSheet.create({
    container:{
        paddingVertical:RFValue(15),
        paddingHorizontal:RFValue(40),
        borderRadius:RFValue(10),
        backgroundColor:"#784dfa"
    },
    text:{
        fontSize:RFValue(20),
        color:"white",
        fontWeight:"600"
    }
})