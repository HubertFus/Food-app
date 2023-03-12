import { useContext } from "react";
import { StatusBar, StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import Product from "../components/Product";
import { RFValue } from "../components/responsive/responsiveFont";
import SmallButton from "../components/SmallButton";
import UnderLineButton from "../components/UnderLineButton";
import { CartContext, state } from "../store/cart-context";
import { products } from "../store/Data";
import { useNavigation } from '@react-navigation/native';
import { type BottomTabNavigation } from "../App";
function CartScreen():JSX.Element{
    const cartProductsCtx = useContext(CartContext)
    const navigation = useNavigation<BottomTabNavigation>()
    function backToMenu():void{
        navigation.navigate("Home")
    }
    return <View style={styles.container}>
        {cartProductsCtx.ids.length>0?<View style={{flex:1}}>
            <ScrollView>
                {cartProductsCtx.ids.map((item:state)=>{
                return <Product key={`${item.category}${item.id}`} id={item} product={products[item.category].items[item.id]} quantity={item.quantity}/>
            })}
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footerRow}>
                    <Text style={styles.subTitle}>Total:</Text>
                    <Text style={styles.price}>${cartProductsCtx.value}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <SmallButton text="CHECKOUT"/>
                    <UnderLineButton text="Back to menu" onPress={backToMenu}/>
                </View>
            </View>
        </View>:<View style={styles.emptyCartContainer}>
            <Text style={styles.title}>Your shopping cart is empty</Text>
            <Text style={styles.subTitle}>It seems you haven't chosen your products yet</Text>
        </View>}
    </View>
}
export default CartScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight
    },
    emptyCartContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:RFValue(40),
        textAlign:"center",
        fontWeight:"bold",
        paddingVertical:20,
        color:"#784dfa",
    },
    subTitle:{
        fontSize:RFValue(26),
        textAlign:"center",
        fontWeight:"600"
    },
    footer:{
        height:RFValue(170),
        width:"100%",
        paddingHorizontal:RFValue(30),
        paddingVertical:RFValue(10),
        backgroundColor:"#FFFFFF",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        display:"flex",
        
        flexDirection:"column",
        justifyContent:"space-between",

        elevation:12,
    },
    footerRow:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    price: {
        fontSize: RFValue(20),
        fontWeight: "bold",
        color: "#ffae00",
    },
    buttonContainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }
})