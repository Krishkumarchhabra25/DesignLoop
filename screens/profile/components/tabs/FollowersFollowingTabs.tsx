import { ProfileStackParamList } from '@/types/navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';

import FollowersTab from './FollowersTab';
import FollowingTab from './FollowingTab';

type FollowersFollowingRouteProp = RouteProp<ProfileStackParamList, 'FollowersFollowing'>;

const Tab = createMaterialTopTabNavigator();

const FollowersFollowingTabs = () => {
  const route = useRoute<FollowersFollowingRouteProp>();
  const initialRouteName = route.params.initialTab;

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
          textTransform: 'none',
        },
        tabBarIndicatorStyle: { backgroundColor: '#007AFF', height: 2 },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}
    >
      <Tab.Screen name="Followers" component={FollowersTab} />
      <Tab.Screen name="Following" component={FollowingTab} />
    </Tab.Navigator>
  );
};

export default FollowersFollowingTabs
