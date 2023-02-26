import { Platform, StatusBar, Dimensions } from "react-native";

export function RFPercentage(percent:number):number {
  const { height, width } = Dimensions.get("window");
  const standardLength = width > height ? width : height;
  const offset = width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight?StatusBar.currentHeight:0; 
  const deviceHeight = Platform.OS === "android"? standardLength - offset: standardLength;
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

export function RFValue(fontSize:number, standardScreenHeight = 680):number {
  const { height, width } = Dimensions.get("window");
  const standardLength = width > height ? width : height;
  const offset = width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight?StatusBar.currentHeight:0; 
  const deviceHeight = Platform.OS === "android"? standardLength - offset: standardLength;
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}