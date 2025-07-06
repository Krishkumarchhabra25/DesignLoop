import SocialLoginButton from '@/components/Button/SocialLoginButton';
import AppleIcon from '@/components/svgImageComponents/AppleIcon';
import DesignLoop from '@/components/svgImageComponents/DesignLoop';
import GoogleIcon from '@/components/svgImageComponents/GoogleIcon';
import styles from '@/styles/auth/Sigin.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const SignInScreen = () => {
  const router = useRouter()
  return (
    
   <LinearGradient
  // This mimics the second gradient (the colored background)
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
        {/* DesignLoop Circle with SVG, Cloud and Bubble */}
        <DesignLoop />

        {/* Main Content */}
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
  onPress={() => router.push('/account_setup/PersonalInfo')}
  />

  <SocialLoginButton
  icon={<AppleIcon />}
  text="Continue with Apple"
  onPress={() => router.push('/account_setup/PersonalInfo')}
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
