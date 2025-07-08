import { BottomTabParamList } from '@/types/navigation';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import SocialLoginButton from '@/components/Button/SocialLoginButton';
import DesignLoop from '@/components/svgImageComponents/DesignLoop';
import styles from '@/styles/AccountSetup/Complete.styles';

// ✅ Define props type
type Props = {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const AccountCompleteScreen: React.FC<Props> = ({ setIsAuthenticated }) => {
  const navigation = useNavigation<BottomTabNavigationProp<BottomTabParamList>>();

  return (
    <LinearGradient
      colors={['#9B84DF', '#698CFF', 'rgba(89, 132, 245, 0.96)', '#6F8DE7', '#9F84DA']}
      locations={[0, 0.1958, 0.4299, 0.7891, 0.9892]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <LinearGradient
        colors={['rgba(255,255,255,0)', '#FFFFFF']}
        locations={[0.3, 1]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView style={styles.safe}>
        <DesignLoop />
        <View style={styles.content}>
          <View style={styles.childcontent}>
            <Text style={styles.title}>Account Setup Complete!</Text>
            <Text style={styles.subtitle}>
              Your account setup is complete! You can now start exploring the Design Loop Community.
            </Text>
          </View>

          <View style={styles.buttonGroup}>
            <SocialLoginButton
              text="Start Exploring"
              useGradient
              onPress={() => setIsAuthenticated(true)}
            />
          </View>

          <Text style={styles.terms}>Need help?</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AccountCompleteScreen;
