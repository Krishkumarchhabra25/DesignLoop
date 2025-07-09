import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AppNavigation from './navigation/NavigationContainer';
import CustomSplashScreen from './screens/splash/CustomSplashScreen'; // your custom screen

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true); // 👈 added

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500)); // fake load
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync(); // hide the native splash
      }
    }

    prepare();
  }, []);

  // 👇 after custom splash is shown for 2s, show main app
  useEffect(() => {
    if (appIsReady) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      {showSplash ? <CustomSplashScreen /> : <AppNavigation />}
    </View>
  );
}
 