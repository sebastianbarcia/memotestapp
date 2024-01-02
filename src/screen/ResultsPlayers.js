import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import GameContext from "../context/GameContext";
import { SafeAreaView } from "react-native-safe-area-context";
import GameResultList from "../components/GameResultList";

const ResultsPlayers = () => {
  const { intentsBest } = useContext(GameContext);

  const renderItem = ({ item, index }) => (
    <GameResultList item={item} index={index} />
  );
  return (
    <SafeAreaView style={styles.screen}>
      {intentsBest.length === 0 ? (
        <Text style={styles.noResult}>No se registraron resultados</Text>
      ) : (
        <FlatList
          style={styles.flatList}
          data={intentsBest.sort()}
          renderItem={renderItem}
          keyExtractor={(index) => index.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default ResultsPlayers;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  noResult: { textAlign: "center" },
});
