import { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './src/screens/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigations/TabNavigation';
import * as Location from 'expo-location';
import { UserLocationContext } from './src/Context/UserLocationContext';

SplashScreen.preventAutoHideAsync();

const tokenCache = {
  async getToken() {
    try {
      return SecureStore.getItemAsync(key);
    } catch (error) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (error) {
      return;
    }
  },
};
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const [fontsLoaded] = useFonts({
    'outfit-regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-light': require('./assets/fonts/Outfit-Light.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </UserLocationContext.Provider>
  );
}
