import { Image, StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { RFValue } from "./responsive/responsiveFont";

interface Props {
  name: string;
  image: ImageSourcePropType
}

function CategoryTile(props: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} >
        <Image source={props.image} resizeMode="cover" style={styles.image}/>
      </View>
      <Text style={styles.text}>{props.name}</Text>
    </View>
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
