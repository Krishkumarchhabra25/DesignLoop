// components/ui/TabBarBackground.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';

const TabBarBackground = () => {
  return <View style={styles.background} />;
};

export default TabBarBackground;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ffffff', // or 'transparent', or custom blur
  },
});
