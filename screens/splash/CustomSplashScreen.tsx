import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';

import { Logo } from '@/components/Logo';

import {
  Platform,
  StatusBar as RNStatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';





export default function SplashScreen() {

  return (
    <LinearGradient
      colors={[
        '#9B84DF',
        '#698CFF',
        '#5984F5',
        '#6F8DE7',
        '#9F84DA',
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ExpoStatusBar translucent style="light" />
      <View style={styles.statusBarBackground} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.centerContent}>
          <Logo size={72} />
          <Text style={styles.title}>DesignLoop</Text>
        </View>

        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.1</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBarBackground: {
    height: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
    backgroundColor: 'transparent',
  },
  safeArea: {
    flex: 1,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '500',
    marginTop: 12,
  },
  versionContainer: {
    alignItems: 'center',
    paddingBottom: 95,
  },
  versionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '300',
  },
});