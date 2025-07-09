// screens/profile/components/tabroutes.tsx
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Platform, View } from 'react-native';
import AboutTab from './tabs/AboutTab';
import PortfolioTab from './tabs/PortfolioTab';
import PostsTab from './tabs/PostsTab';
import ProjectsTab from './tabs/ProjectsTab';

const Tab = createMaterialTopTabNavigator();

const TabRoutes = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: false,
          tabBarActiveTintColor: '#3478f6',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            backgroundColor: 'white',
            elevation: 0, // removes shadow on Android
            shadowOpacity: 0, // removes shadow on iOS
            borderBottomWidth: 1,
            borderColor: '#eee',
            height: Platform.OS === 'ios' ? 48 : 52, // consistent height
          },
          tabBarLabelStyle: {
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: 14,
            paddingBottom: Platform.OS === 'android' ? 4 : 0, // fixes alignment on Android
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#3478f6',
            height: 3,
            borderRadius: 2,
          },
        }}
      >
        <Tab.Screen name="About" component={AboutTab} />
        <Tab.Screen name="Portfolio" component={PortfolioTab} />
        <Tab.Screen name="Posts" component={PostsTab} />
        <Tab.Screen name="Projects" component={ProjectsTab} />
      </Tab.Navigator>
    </View>
  );
};

export default TabRoutes;
