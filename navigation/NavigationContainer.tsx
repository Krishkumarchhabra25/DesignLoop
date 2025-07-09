import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const AppNavigation = () => {
const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
       {isAuthenticated ? (
  <BottomTabNavigator />
) : (
  <AuthNavigator setIsAuthenticated={setIsAuthenticated} />
)}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
