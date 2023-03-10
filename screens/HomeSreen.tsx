import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { RFValue } from "../components/responsive/responsiveFont";
import Ionicons from '@expo/vector-icons/Ionicons';
import CategoryTile from "../components/CategoryTile";
import { LinearGradient } from 'expo-linear-gradient';
import PopularItem from "../components/PopularItem";
import { useState, useEffect } from "react";
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { type BottomTabNavigation } from "../App";
import ListOfProducts from "../components/ListOfProducts";
import { products } from "../store/Data";
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
        width:"100%",
        paddingHorizontal:20,
    },
    titleContainer:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    title:{
        fontSize:RFValue(40)
    },
    userAvatar:{
        height:RFValue(40),
        width:RFValue(40),
        backgroundColor:"gray",
        borderRadius:100
    },
    subtitle:{
        fontSize:RFValue(35)
    },
    promotionContainer:{
        marginVertical:20, 
    },
    promotionImage:{
        height:RFValue(150),
        width:RFValue(150),
        position:"absolute",
        right:0,
        bottom:-RFValue(20),
        marginVertical:20,

    },
    promotionText:{
        fontSize:RFValue(20),
        color:"white"
    },
    promotionBox:{
        padding:10,
        paddingBottom:20,
        borderRadius:20
    },
    popularImage:{
        height:RFValue(70),
        width:RFValue(70)
    }
})
const categories = [
    {name:"All", image:require("../images/friesbox.png")},
    {name:"Burger",image:require("../images/beefBurger.png")},
    {name:"Pizza",image:require("../images/margherita.png")},
    {name:"Pasta",image:require("../images/spaghetti.png")},
    {name:"Dessert",image:require("../images/dessert.png")},
    {name:"Wings",image:require("../images/wings.png")},
    {name:"Drink",image:require("../images/soda.png")},
    {name:"Alcohol",image:require("../images/alcohol.png")},
    {name:"Sauce",image:require("../images/sauce.png")},
    {name:"Other",image:require("../images/soup.png")}]
const popularItems = [{category:0,id:0},{category:1,id:0},{category:2,id:0}]
function HomeScreen():JSX.Element{
    const navigation = useNavigation<BottomTabNavigation>()
    const [selectedCategory, setSelectedCategory] = useState<number>(0)
    function changeCategory(newCategory:number):void{
        setSelectedCategory(newCategory)
    }
    return <>
<ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Menu</Text>
            <View style={styles.userAvatar}></View>
        </View>
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {categories.map((item,index)=>{
                    return <CategoryTile onPress={changeCategory} name={item.name} key={`${index}`} image={item.image} focused={index===selectedCategory?true:false} index={index}/>
                })}
            </ScrollView>
        </View>
        {selectedCategory>0?<ListOfProducts index={selectedCategory}/>:<>
        <View style={styles.promotionContainer}>
            <Text style={styles.subtitle}>Promotion</Text>
            <LinearGradient style={styles.promotionBox} colors={["#784dfa","#8e6ef5"]}>
                <Image source={require("../images/friesbox.png")} style={styles.promotionImage}/>
                <Text style={styles.promotionText}>Today's Offer</Text>
                <Text style={[styles.promotionText,{fontWeight:"500"}]}>Free box of Fries</Text>
                <Text style={styles.promotionText}>on all orders above 30$</Text>
            </LinearGradient>
        </View>
        <View style={{paddingBottom:30}}>
            <Text style={styles.subtitle}>Popular</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {popularItems.map((item,index)=>{
                    return <PopularItem category={item.category} id={item.id} product={products[item.category].items[item.id]}/>
                })}
            </ScrollView>
        </View></>}
    </ScrollView>
    </>
}
export default HomeScreen;
