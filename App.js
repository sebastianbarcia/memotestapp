import { StyleSheet} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts , OpenSans_400Regular , OpenSans_700Bold} from '@expo-google-fonts/open-sans'
import { useEffect } from 'react';
import ShopNavigator from './src/navigators/ShopNavigator';
import { GameProvider } from './src/context/GameContext';

SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  },[fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
    <GameProvider>
      <ShopNavigator/>
    </GameProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
