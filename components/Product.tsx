import { StyleSheet, Text, View, ImageSourcePropType, Image } from "react-native";
import IconButton from "./IconButton";
import { RFValue } from "./responsive/responsiveFont";
import { CartContext, state } from "../store/cart-context";
import { useContext } from "react";

interface Props {
    product:{
        name: string;
        image: ImageSourcePropType;
        price: number;
    }
    quantity: number;
    id:{
        category:number;
        id:number
    }
}
function Product(props:Props):JSX.Element{
    const cartProductsCtx = useContext(CartContext)

    function increment():void{
        cartProductsCtx.addToCart(props.id.category,props.id.id)
    }
    function decrement():void{
        cartProductsCtx.decrementQuantityProducts(props.id.category,props.id.id)
    }
    return <View style={styles.container}>
        <Image source={props.product.image} style={styles.image}/>
        <View style={styles.productContainer}>
            <Text style={styles.name}>{props.product.name}</Text>
            <Text style={styles.price}>${props.product.price}</Text>
            <View style={styles.quantityContainer}>
                <IconButton name="md-remove-circle" onPress={decrement}/>
                <Text style={styles.quantity}>{props.quantity}</Text>
                <IconButton name="add-circle" onPress={increment}/>
            </View>
        </View>
    </View>
}
export default Product;
const styles = StyleSheet.create({
    container:{
        height:RFValue(150),
        margin:10,
        display:"flex",
        flexDirection:"row"
    },
    image:{
        backgroundColor:"#dbd9d9",
        height:RFValue(150),
        width:RFValue(150),
        borderRadius:RFValue(20)
    },
    quantityContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    quantity:{
        fontSize:RFValue(22),
    },
    productContainer:{
        display:"flex",
        justifyContent:"space-evenly",
        paddingHorizontal:RFValue(20)
    },
    name: {
        fontSize: RFValue(26),
        fontWeight: "600",
        marginBottom: RFValue(4),
      },
      price: {
        fontSize: RFValue(20),
        fontWeight: "bold",
        color: "#ffae00",
      },
})