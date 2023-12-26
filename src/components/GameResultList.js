import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GameResultList = ({item , index}) => {
   
  return (
    <View style={styles.screen}>
       {item && (
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 , paddingVertical:8   }}>
         Puesto {index + 1}: {item}
        </Text>
      )}  
    </View>
  );
};

export default GameResultList;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        marginHorizontal:20,
        borderBottomWidth:2,
        borderColor:"grey"
    }
});
