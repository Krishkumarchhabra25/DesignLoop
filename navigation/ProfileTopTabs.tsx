import AboutTab from '@/screens/profile/components/tabs/AboutTab';
import PortfolioTab from '@/screens/profile/components/tabs/PortfolioTab';
import PostsTab from '@/screens/profile/components/tabs/PostsTab';
import ProjectsTab from '@/screens/profile/components/tabs/ProjectsTab';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';


const Tab = createMaterialTopTabNavigator();

const ProfileTopTabs = () => {
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

export default ProfileTopTabs;
