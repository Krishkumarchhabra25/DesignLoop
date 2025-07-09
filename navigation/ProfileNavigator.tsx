// navigators/ProfileNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import EditProfileScreen from '@/screens/profile/EditProfileScreen';
import ProfileScreen from '@/screens/profile/ProfileScreen';
import { ProfileStackParamList } from '@/types/navigation';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{ headerShown: false }} // Profile page doesn't need a header
      />
    <Stack.Screen
  name="EditProfile"
  component={EditProfileScreen}
  options={({ navigation }) => ({
    headerTitle: 'Edit Profile',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#fff', // set a background so text is visible
    },
    headerTintColor: '#000', // makes sure back icon and title are visible (black)
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingLeft: 12 }}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          console.log('Saved');
        }}
        style={{ paddingRight: 12 }}
      >
        <Ionicons name="checkmark" size={24} color="green" />
      </TouchableOpacity>
    ),
  })}
/>

    </Stack.Navigator>
  );
};

export default ProfileNavigator;
