import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { RFValue } from "./responsive/responsiveFont";

interface Props {
  name: string;
  price: number;
  image: ImageSourcePropType;
}

function PopularItem(props: Props): JSX.Element {
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  const onPressIn = () => {
    setButtonPressed(true);
  };

  const onPressOut = () => {
    setButtonPressed(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
      </View>
      <Pressable
        style={[
          styles.addButtonContainer,
          buttonPressed && styles.addButtonContainerPressed,
        ]}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
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
  price: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#E91E63",
  },
  addButtonContainer: {
    position: "absolute",
    bottom: RFValue(10),
    right: RFValue(10),
    width: RFValue(45),
    height: RFValue(45),
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
});
