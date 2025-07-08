import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SocialLoginButton from '@/components/Button/SocialLoginButton';
import AppleIcon from '@/components/svgImageComponents/AppleIcon';
import DesignLoop from '@/components/svgImageComponents/DesignLoop';
import GoogleIcon from '@/components/svgImageComponents/GoogleIcon';
import styles from '@/styles/auth/Sigin.styles';
import { AuthStackParamList } from '@/types/navigation'; // <-- Make sure you created this

type AuthNav = NativeStackNavigationProp<AuthStackParamList, 'SignIn'>;

const SignInScreen = () => {
  const navigation = useNavigation<AuthNav>();

  const handleGoogleLogin = () => {
    // After successful login
    navigation.navigate('PersonalInfo');
  };

  const handleAppleLogin = () => {
    navigation.navigate('PersonalInfo');
  };

  return (
    <LinearGradient
      colors={[
        '#9B84DF',
        '#698CFF',
        'rgba(89, 132, 245, 0.96)',
        '#6F8DE7',
        '#9F84DA',
      ]}
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
            <Text style={styles.title}>Design Loop</Text>
            <Text style={styles.subtitle}>Share. Grow. Collaborate</Text>
          </View>

          <Text style={styles.prompt}>Sign in to Get Started</Text>

          <View style={styles.buttonGroup}>
            <SocialLoginButton
              icon={<GoogleIcon />}
              text="Continue with Google"
              useGradient
              onPress={handleGoogleLogin}
            />

            <SocialLoginButton
              icon={<AppleIcon />}
              text="Continue with Apple"
              onPress={handleAppleLogin}
            />
          </View>

          <Text style={styles.terms}>
            By tapping Continue, you agree to our{' '}
            <Text style={styles.link}>Terms</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignInScreen;
