import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AccountCompleteScreen from '@/screens/AccountSetup/AccountComplete';
import DesignicheScreen from '@/screens/AccountSetup/DesignicheScreen';
import PersonalInfoScreen from '@/screens/AccountSetup/PersonalInfoScreen';
import SignInScreen from '@/screens/authScreen/SignInScreen';

const Stack = createNativeStackNavigator();

// ✅ Define props type
type AuthNavigatorProps = {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthNavigator: React.FC<AuthNavigatorProps> = ({ setIsAuthenticated }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Stack.Screen name="DesignNiche" component={DesignicheScreen} />
      <Stack.Screen name="AccountComplete">
        {() => <AccountCompleteScreen setIsAuthenticated={setIsAuthenticated} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
