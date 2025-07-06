import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import { IconSymbol } from '../ui/IconSymbol';

const { width } = Dimensions.get('window');
const gradientColors = [
  '#9B84DF',
  '#698CFF',
  'rgba(89, 132, 245, 0.96)',
  '#6F8DE7',
  '#9F84DA',
] as const;

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const handlePress = (routeName: string, index: number) => {
    const isFocused = state.index === index;
    const event = navigation.emit({
      type: 'tabPress',
      target: state.routes[index].key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(routeName);
    }
  };

  return (
    <View style={styles.wrapper}>
      {/* Tab Bar Gradient Background */}
      <LinearGradient colors={gradientColors} style={styles.tabBar}>
        {state.routes.map((route, index) => {
          if (route.name === 'addpost') return null;

          const isFocused = state.index === index;
          const iconColor = isFocused ? '#fff' : '#e5e5e5';

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => handlePress(route.name, index)}
              style={styles.tabButton}
              activeOpacity={0.8}
            >
              <IconSymbol name={getIcon(route.name)} size={24} color={iconColor} />
            </TouchableOpacity>
          );
        })}
      </LinearGradient>

      {/* Center Floating Button with Gradient */}
      <TouchableOpacity
        onPress={() => {
          const index = state.routes.findIndex((r) => r.name === 'addpost');
          handlePress('addpost', index);
        }}
        activeOpacity={0.9}
        style={styles.floatingButtonWrapper}
      >
        <LinearGradient colors={gradientColors} style={styles.plusButton}>
          <IconSymbol name="add" size={32} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const getIcon = (name: string): any => {
  switch (name) {
    case 'index':
      return 'house.fill';
    case 'search':
      return 'magnifyingglass';
    case 'likesfeed':
      return 'heart.fill';
    case 'profile':
      return 'person.fill';
    default:
      return 'questionmark';
  }
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  tabBar: {
    flexDirection: 'row',
    borderRadius: 50,
    height: 70,
    width: width - 40,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  floatingButtonWrapper: {
    position: 'absolute',
    top: -28,
    left: (width - 64) / 2,
  },
  plusButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
});
