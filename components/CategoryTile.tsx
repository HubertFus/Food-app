import { useState } from "react";
import { Image, StyleSheet, Text, View, ImageSourcePropType, Pressable } from "react-native";
import { RFValue } from "./responsive/responsiveFont";

interface Props {
  name: string;
  image: ImageSourcePropType;
  focused: boolean;
  onPress:(newCategory:number)=>void;
  index:number
}

function CategoryTile(props: Props): JSX.Element {
  const [pressed, setPressed] = useState<boolean>(false)
  const onPressIn = () => {
    setPressed(true);
  };

  const onPressOut = () => {
    setPressed(false);
  };
  return (
    <Pressable style={styles.container} onPress={()=>props.onPress(props.index)} onPressIn={onPressIn} onPressOut={onPressOut}>
      <View style={[styles.imageContainer,props.focused?{backgroundColor:"#784dfa"}:pressed?{backgroundColor:"#ababab"}:null]} >
        <Image source={props.image} resizeMode="cover" style={styles.image}/>
      </View>
      <Text style={styles.text}>{props.name}</Text>
    </Pressable>
  );
}

export default CategoryTile;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
  },
  imageContainer: {
    height: RFValue(100),
    width: RFValue(100),
    backgroundColor: "#dbd9d9",
    borderRadius: 20,
    marginBottom: 10,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 8,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    height: "80%",
    width: "80%",
  },
});
