import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <>
      {/* Set correct status bar style */}
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: activeColor,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
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
        {/* All your tabs here */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <View style={styles.iconWrapper}>
                <IconSymbol size={26} name="house.fill" color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color }) => (
              <View style={styles.iconWrapper}>
                <IconSymbol size={26} name="magnifyingglass" color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="addpost"
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <Pressable style={styles.floatingIconWrapper}>
                <IconSymbol size={40} name="plus.circle.fill" color="white" />
              </Pressable>
            ),
            tabBarLabelStyle: { display: 'none' },
          }}
        />
        <Tabs.Screen
          name="likesfeed"
          options={{
            title: 'Likes',
            tabBarIcon: ({ color }) => (
              <View style={styles.iconWrapper}>
                <IconSymbol size={26} name="heart.fill" color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => (
              <View style={styles.iconWrapper}>
                <IconSymbol size={26} name="person.fill" color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  floatingIconWrapper: {
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
  },
});
