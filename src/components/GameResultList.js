import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GameResultList = ({ item, index }) => {
  return (
    <View style={styles.screen}>
      {item && (
        <>
          <Text style={styles.text}>{index + 1}º puesto:</Text>
          <Text style={[styles.text, styles.intents]}>{item} intentos</Text>
        </>
      )}
    </View>
  );
};

export default GameResultList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 20,
    borderRadius:8,
    borderColor: "grey",
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
    marginBottom:12,
    backgroundColor:"white",
    paddingVertical:10
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center"
  },
  intents: {
    fontWeight: "bold",
  },
});
