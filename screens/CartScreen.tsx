import { useContext } from "react";
import { Text, View } from "react-native";
import { products } from "../components/ListOfProducts";
import { CartContext, state } from "../store/cart-context";

function CartScreen():JSX.Element{
    const cartProductsCtx = useContext(CartContext)
    return <View>
        {cartProductsCtx.ids.map((item:state)=>{
            return <View>
                <Text>{products[item.category].items[item.id].name}</Text>
            </View>
        })}
    </View>
}
export default CartScreen;
const styles = {

}