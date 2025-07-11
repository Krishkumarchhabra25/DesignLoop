// navigators/ProfileNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AddEducation from '@/screens/profile/AddEducation';
import AddExperience from '@/screens/profile/AddExperience';
import AddProjects from '@/screens/profile/AddProjects';
import FollowersFollowingTabs from '@/screens/profile/components/tabs/FollowersFollowingTabs';
import EditEducation from '@/screens/profile/EditEducation';
import EditExperience from '@/screens/profile/EditExperience';
import EditProfileScreen from '@/screens/profile/EditProfileScreen';
import EditProjects from '@/screens/profile/EditProjects';
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

 <Stack.Screen
  name="AddExperince"
  component={AddExperience}
  options={({ navigation }) => ({
    headerTitle: 'Add Experience',
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
 <Stack.Screen
  name="EditExperince"
  component={EditExperience}
  options={({ navigation }) => ({
    headerTitle: 'Edit Experience',
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
 <Stack.Screen
  name="AddEducation"
  component={AddEducation}
  options={({ navigation }) => ({
    headerTitle: 'Add Education',
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

 <Stack.Screen
  name="EditEducation"
  component={EditEducation}
  options={({ navigation }) => ({
    headerTitle: 'Edit Education',
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

<Stack.Screen
  name="FollowersFollowing"
  component={FollowersFollowingTabs}
  options={({ navigation, route }) => ({
    headerTitle: route.params.initialTab, // dynamically set based on param
    headerTitleAlign: 'center',
     headerShadowVisible: false, 
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#000',
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingLeft: 12 }}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
    ),
  })}
/>

 <Stack.Screen
  name="AddProjects"
  component={AddProjects}
  options={({ navigation }) => ({
    headerTitle: 'Add Projects',
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


 <Stack.Screen
  name="EditProjects"
  component={EditProjects}
  options={({ navigation }) => ({
    headerTitle: 'Edit Projects',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#fff', 
    },
    headerTintColor: '#000', 
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
