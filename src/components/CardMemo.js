import { StyleSheet, Text , Dimensions , TouchableOpacity } from "react-native";
import React from "react";

const CardMemo = ({
  flippedIndices,
  index,
  matchedPairs,
  handleCardPress,
  item
}) => {
  return (
    <TouchableOpacity
          style={[
            styles.card,
            {
              backgroundColor:
                flippedIndices.includes(index) || matchedPairs.includes(item)
                  ? item
                  : "gray",
            },
          ]}
          onPress={() => handleCardPress(index)}
          disabled={matchedPairs.includes(item)}
        >
          <Text style={styles.cardText}>
            {flippedIndices.includes(index) || matchedPairs.includes(item)
              ? item
              : "?"}
          </Text>
        </TouchableOpacity>
  );
};

export default CardMemo;

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("screen").width / 6,
    height: 80,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  cardText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
