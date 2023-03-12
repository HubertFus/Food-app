import { View, Text, StatusBar, StyleSheet, TextInput, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { RFValue } from "../components/responsive/responsiveFont";
import { products } from "../store/Data";
import SearchItem from "../components/SearchItem";

function SearchSreen():JSX.Element{
return <View style={styles.container}>
    <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={RFValue(27)} color="black"/>
        <TextInput placeholder="Search"/>
    </View>
    <ScrollView style={styles.itemsContainer} contentContainerStyle={{paddingHorizontal:RFValue(20)}} showsVerticalScrollIndicator={false}>
        {
            products.map((category, idCat)=>category.items.map((item, id)=>{
                return <SearchItem category={idCat} id={id} key={`${idCat}${id}`} name={item.name} image={item.image} price={item.price}/>
            }))
        }
    </ScrollView>
</View>
}
export default SearchSreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:StatusBar.currentHeight
        
    },
    searchBarContainer:{
        display:"flex",
        flexDirection:"row",
        paddingVertical:RFValue(20),
        marginHorizontal:RFValue(60),
        backgroundColor:"#FFFFFF",
        borderTopLeftRadius:RFValue(20),
        borderTopRightRadius:RFValue(20),
        paddingHorizontal:RFValue(20),

    },
    itemsContainer:{
        flex:1,
        paddingVertical:RFValue(20),
        marginHorizontal:RFValue(10),
        backgroundColor:"#FFFFFF",
        borderTopLeftRadius:RFValue(20),
        borderTopRightRadius:RFValue(20),
    }
})