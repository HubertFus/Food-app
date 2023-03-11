import { useState, useLayoutEffect, useContext } from "react";
import { FlatList, StyleSheet, Text, View, Image, Pressable} from "react-native";
import { CartContext } from "../store/cart-context";
import { products } from "../store/Data";
import { RFValue } from "./responsive/responsiveFont";
interface Props {
    index:number
}

function ListOfProducts(props:Props):JSX.Element{
  const cartProductsCtx = useContext(CartContext)

    const onPressIn = () => {
      };
    
    const onPressOut = () => {
      };
    const onPress = (id:number) => {

      cartProductsCtx.addToCart(props.index-1,id)
    }
    return <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{products[props.index-1].name}</Text>
      <Text style={styles.position}>Position: {products[props.index-1].items.length}</Text>
    </View>
    {products[props.index-1].items.map((item, index)=>{
      return (
        <View style={styles.itemContainer} key={index}>
            <Image style={styles.image} source={item.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.price}>{item.price}$</Text>
                <Pressable
                    style={styles.addButtonContainer}
                    onPressIn={onPressIn}
                    onPressOut={onPressOut}
                    onPress={()=>{onPress(index)}}>
                    <Text style={styles.addButtonText}>+</Text>
                </Pressable>
            </View>
        </View>
      );
    })}
  </View>
}
export default ListOfProducts;

const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    position: {
      fontSize: 16,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: RFValue(10),
    },
    image: {
      width: RFValue(150),
      height: RFValue(150),
      marginRight: 10,
      borderRadius: 10,
      backgroundColor:"#dbd9d9"
    },
    itemName: {
      fontSize: RFValue(20),
      fontWeight:"700"
    },
    price: {
        fontSize: RFValue(20),
        fontWeight: "bold",
        color: "#E91E63",
    },
    addButtonContainer: {
        position: "absolute",
        bottom: 0,
        right: RFValue(10),
        width: RFValue(40),
        height: RFValue(40),
        borderRadius: RFValue(45) / 2,
        backgroundColor: "#E91E63",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
    addButtonContainerPressed: {
        backgroundColor: "#C2185B",
    },
    addButtonText: {
        fontSize: RFValue(24),
        color: "#fff",
    },
    textContainer:{
        height:RFValue(150),
        flexGrow:1,
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly",
    }
  });