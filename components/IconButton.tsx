import { StyleSheet, Text, Pressable } from "react-native";
import { RFValue } from "./responsive/responsiveFont";
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from "react"
interface Props {
    name: string;
    onPress?: ()=>void,
    style?: object
    size?: number
}
function IconButton(props:Props):JSX.Element{
    const [pressed, setPressed] = useState<boolean>()
    function onPressIn():void{
        setPressed(true)
    }
    function onPressOut():void{
        setPressed(false)
    }
    return <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={props.onPress} style={props.style}>
       <Ionicons name={pressed?`${props.name}-sharp`:`${props.name}-outline`} size={props.size?props.size:RFValue(30)} color={pressed?"#784dfa":"#8e6ef5"} />
    </Pressable>
}
export default IconButton;
