import { NavigationContainer  } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View , StyleSheet , Text} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import React from 'react'
import MemoScreen from "../screen/MemoScreen";
import ResultsPlayers from "../screen/ResultsPlayers";


const Tab = createBottomTabNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"  >
        <Tab.Screen name="Juego" component={MemoScreen} options={{tabBarIcon:({focused}) =>(
        <View style={styles.tabBarIcon}>
            <Ionicons name='game-controller-outline' size={28} color={focused ? "black" : "gray"} />
        </View>
    )}}/>
      <Tab.Screen name="Resultados" component={ResultsPlayers} options={{tabBarIcon:({focused}) =>(
        <View style={styles.tabBarIcon}>
            <Ionicons name='list-outline' size={28} color={focused ? "black" : "gray"} />
        </View>
    )}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator

const styles = StyleSheet.create({
  tabBar:{
      shadowColor: "#7f5dff0",
      shadowOffset:{
          width:0,
          height:10
      },
      shadowOpacity:0.25,
      shadowRadius: 0.25,
      elevation:5,
      position:"absolute",
      bottom:25,
      left:20,
      right:20,
      borderRadius:15,
      height:90
  },
  tabBarIcon:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
  }
})