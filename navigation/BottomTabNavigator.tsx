import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform, Pressable, View } from 'react-native';


import { HapticTab } from '@/components/HapticTab';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import AddPostScreen from '@/screens/addpost/AddPostScreen';
import Home from '@/screens/Home/Home';
import LikesFeedScreen from '@/screens/Likesfeed/LikesFeedScreen';
import ProfileScreen from '@/screens/profile/ProfileScreen';
import SearchScreen from '@/screens/search/SearchScreen';
import { IconSymbol } from '../components/ui/IconSymbol';
import TabBarBackground from '../components/ui/TabBarBackground';
import { Colors } from '../constants/Colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();
  const activeColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => <TabBarBackground />,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            height: 80,
            paddingBottom: 10,
            borderTopWidth: 0,
          },
          android: {
            height: 80,
            paddingBottom: 10,
            borderTopWidth: 0,
          },
          default: {},
        }),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <IconSymbol size={26} name="house.fill" color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <IconSymbol size={26} name="magnifyingglass" color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Pressable style={{
              width: 64,
              height: 64,
              backgroundColor: '#000',
              borderRadius: 32,
              alignItems: 'center',
              justifyContent: 'center',
              transform: [{ translateY: -20 }],
              elevation: 6,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
            }}>
              <IconSymbol size={40} name="plus.circle.fill" color="white" />
            </Pressable>
          ),
          tabBarLabelStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="LikesFeed"
        component={LikesFeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <IconSymbol size={26} name="heart.fill" color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <IconSymbol size={26} name="person.fill" color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
