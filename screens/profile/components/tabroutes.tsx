// screens/profile/components/tabroutes.tsx
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import AboutTab from './tabs/AboutTab';
import PortfolioTab from './tabs/PortfolioTab';
import PostsTab from './tabs/PostsTab';
import ProjectsTab from './tabs/ProjectsTab';

const Tab = createMaterialTopTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        
        tabBarScrollEnabled: false,
        tabBarActiveTintColor: '#3478f6',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { backgroundColor: 'white' },
        tabBarLabelStyle: { fontWeight: 'bold', textTransform: 'none' },
      }}
    >
      <Tab.Screen name="About" component={AboutTab} />
      <Tab.Screen name="Portfolio" component={PortfolioTab} />
      <Tab.Screen name="Posts" component={PostsTab} />
      <Tab.Screen name="Projects" component={ProjectsTab} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
