import { View, Text, StatusBar, StyleSheet, TextInput, ImageSourcePropType, Image } from "react-native";
import IconButton from "./IconButton";
import { RFValue } from "./responsive/responsiveFont";
import { CartContext } from "../store/cart-context";
import { useContext } from "react";

interface Props {
    name:string;
    image: ImageSourcePropType;
    price: number;
    category: number;
    id: number
}
function SearchItem(props:Props):JSX.Element{
    const cartProductsCtx = useContext(CartContext)

    const onPress = () => {
        cartProductsCtx.addToCart(props.category,props.id)
    }
    return <View style={styles.container}>
        <Image source={props.image} style={styles.image}/>
        <View>
            <Text style={styles.productName}>{props.name}</Text>
            <Text style={styles.price}>${props.price}</Text>
        </View>
        <View>
            <IconButton name="add-circle" size={RFValue(50)} onPress={onPress}/>
        </View>
    </View>
}
export default SearchItem;
const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:RFValue(100),
        backgroundColor:"#f5f5f5",
        padding:RFValue(10),
        marginVertical:RFValue(10),
        borderRadius:RFValue(10),
        elevation:6
    },
    image:{
        height:RFValue(80),
        width:RFValue(80)
    },
    productName:{   
        width:RFValue(180),
        fontSize:RFValue(24),
        fontWeight:"700",
        color:"#784dfa"
    },
    price:{
        fontSize: RFValue(20),
        fontWeight: "bold",
        color: "#ffae00",
    },
})