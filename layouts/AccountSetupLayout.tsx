
import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const AccountSetupLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={styles.safeArea} >
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};  

export default AccountSetupLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
});
