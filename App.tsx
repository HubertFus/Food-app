import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './screens/HomeSreen';
import StartScreen from './screens/StartScreen';

export type BottomTabParamList = {
  Start: undefined;
  Home: undefined;
  Search: undefined;
  Cart: undefined
};

export type BottomTabNavigation = BottomTabNavigationProp<BottomTabParamList>;

const Tab = createBottomTabNavigator<BottomTabParamList>();
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarIcon:({size,focused,color})=>{return <Ionicons size={size} color={"#784dfa"} name={focused?"home-sharp":"home-outline"}/>},tabBarStyle:{borderTopWidth: 0,
            backgroundColor: '#FFFFFF',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            height: 55,
            paddingBottom: 5,} }} />
      <Tab.Screen name="Search" component={HomeScreen} options={{ headerShown: false, tabBarIcon:({size,focused,color})=>{return <Ionicons size={size} color={"#784dfa"} name={focused?"search-sharp":"search-outline"}/>},tabBarStyle:{borderTopWidth: 0,
            backgroundColor: '#FFFFFF',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            height: 55,
            paddingBottom: 5,} }} />
      <Tab.Screen name="Cart" component={HomeScreen} options={{ headerShown: false, tabBarIcon:({size,focused,color})=>{return <Ionicons size={size} color={"#784dfa"} name={focused?"cart-sharp":'cart-outline'}/>},tabBarStyle:{borderTopWidth: 0,
            backgroundColor: '#FFFFFF',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            height: 55,
            paddingBottom: 5,}}} />
    </Tab.Navigator>
  );
}
export type ScreenNames = ["Start", "Home"] 

export type RootStackParamListStack = {
  Start: undefined,
  HomeStack: undefined,
};
export type StackNavigation = StackNavigationProp<RootStackParamListStack>;
const Stack = createStackNavigator<RootStackParamListStack>();
export default function App() {  
  return (
    <>
      <NavigationContainer>
      <StatusBar style='light' translucent={false}/>
        <Stack.Navigator>
          <Stack.Screen name='Start' component={StartScreen} options={{headerShown:false}}/>
          <Stack.Screen name='HomeStack' component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
