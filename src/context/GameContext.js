import { createContext, useState } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [intentsBest, setIntentsBest] = useState([]);

  const addIntentBest = (intent) => {
    setIntentsBest((prevIntentsBest) => [...prevIntentsBest, intent]);
  };
  const data = {
    intentsBest,
    addIntentBest,
    setIntentsBest,
  };

  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};

export default GameContext;

export { GameProvider };
