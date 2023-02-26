import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { RFValue } from "../components/responsive/responsiveFont";
import React from "react"
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { type StackNavigation } from "../App";
const logoImage = require("../images/Logo.png");

function StartScreen(): JSX.Element {
  const navigation = useNavigation<StackNavigation>()

  function handleAccepted():void{
    navigation.replace("HomeStack")
  }

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={{ height: 300, width: 300 }} />
      <View>
        <Text style={styles.title}>Enjoy</Text>
        <Text style={styles.title}>Your Food</Text>
      </View>
      <Button text="Get Started" onPress={handleAccepted} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#d65c4b",
  },
  title: {
    color: "white",
    fontSize: RFValue(50),
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default React.memo(StartScreen);
