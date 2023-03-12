import React, { useState, useContext } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import IconButton from "./IconButton";
import { RFValue } from "./responsive/responsiveFont";
import { CartContext } from "../store/cart-context";

interface Props {
  product: {
    name: string,
    image: ImageSourcePropType,
    price: number,
  }
  category: number,
  id: number
}

function PopularItem(props: Props): JSX.Element {
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const cartProductsCtx = useContext(CartContext)
  const onPress = () =>{
    cartProductsCtx.addToCart(props.category, props.id)
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={props.product.image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{props.product.name}</Text>
        <Text style={styles.price}>${props.product.price.toFixed(2)}</Text>
      </View>
      <IconButton name="add-circle" style={styles.addButtonContainer} size={RFValue(40)} onPress={onPress}/>
    </View>
  );
}

export default PopularItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: RFValue(180),
    width: RFValue(140),
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(5),
    borderRadius: RFValue(10),
    overflow: "hidden",
    elevation: 3,
  },
  imageContainer: {
    height: RFValue(100),
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  detailsContainer: {
    paddingHorizontal: RFValue(8),
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: RFValue(10),
  },
  name: {
    fontSize: RFValue(16),
    fontWeight: "600",
    color: "#333",
    marginBottom: RFValue(4),
  },
  price:{
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#ffae00",
  },
  addButtonContainer: {
    position: "absolute",
    bottom: RFValue(10),
    right: RFValue(10),
    elevation: 5,
  },
});
