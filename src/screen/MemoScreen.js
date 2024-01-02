import {
  StyleSheet,
  Alert,
  Dimensions,
  View,
  FlatList,
} from "react-native";

import React, { useContext, useEffect, useRef, useState } from "react";
import colors from "../data/colors";
import CardMemo from "../components/CardMemo";
import GameContext from "../context/GameContext";

const generateCards = () => {
  const allCards = colors.concat(colors);
  return allCards.sort(() => Math.random() - 0.5);
};

const MemoScreen = () => {
  const { setIntentsBest} = useContext(GameContext)
  const animation = useRef(null);
  
  const [cards, setCards] = useState(generateCards());
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [quantity, setQuantity] = useState(0);
 
  useEffect(() => {
    animation.current?.play();

    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedPairs((prev) => [...prev, cards[firstIndex]]);
      }
      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);
    }
  }, [flippedIndices, cards]);

   const handleGenerateNumber = () => {
     setIntentsBest((prevIntentsBest) => [...prevIntentsBest, quantity / 2]);
   };

  const handleCardPress = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index)) {
      setFlippedIndices((prev) => [...prev, index]);
      setQuantity((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (matchedPairs.length === cards.length / 2) {
      Alert.alert(
        `¡Felicidades!, ¡Has encontrado las ${
          matchedPairs.length
        } parejas 🏆 , lo has hecho en ${quantity / 2} intentos`
      );

      handleGenerateNumber();
      setCards(generateCards());
      setMatchedPairs([]);
      setQuantity(0);
    }
  }, [matchedPairs, cards]);

  const renderItem = ({ item, index }) => (
    <CardMemo
      item={item}
      index={index}
      handleCardPress={handleCardPress}
      matchedPairs={matchedPairs}
      flippedIndices={flippedIndices}
    />
  );

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.flatList} // Elimina los estilos de justifyContent y alignContent de aquí
        contentContainerStyle={styles.container} // Agrega contentContainerStyle con los estilos de justifyContent y alignContent
        data={cards}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MemoScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
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
