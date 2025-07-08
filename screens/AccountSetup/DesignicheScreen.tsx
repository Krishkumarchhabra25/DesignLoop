import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { interests } from '@/constants/Interests';
import useAccountProgress from '@/hooks/useAccountProgress';
import useAccountSetup from '@/hooks/useAccountSetup';
import { AuthStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../../styles/AccountSetup/Designiche.styles';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'AccountComplete'>;


const DesignicheScreen = () => {
  const { step } = useLocalSearchParams();
   const navigation = useNavigation<NavigationProp>();

  const { step: storedStep, updateStep } = useAccountProgress();
  const { selectedInterests, toggleInterest } = useAccountSetup();

  const currentStep = Number(step || storedStep || 1);

  const onFinish = async () => {
    await updateStep(3);
   navigation.navigate('AccountComplete')
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>Account Setup</Text>
          <Text style={styles.subheading}>Step 2 of 2 : Design Niche</Text>

          <View style={styles.progressWrapper}>
            <View style={styles.stepRow}>
              <LinearGradient colors={['#698CFF', '#9B84DF']} style={styles.stepCircle}>
                <Text style={styles.activeStepText}>1</Text>
              </LinearGradient>
              <View style={[styles.progressLine, currentStep >= 2 && styles.progressLineFilled]} />
              <LinearGradient colors={['#698CFF', '#9B84DF']} style={styles.stepCircle}>
                <Text style={styles.activeStepText}>2</Text>
              </LinearGradient>
            </View>
          </View>

          <Text style={styles.prompt}>Select your interests so we can customize your feeds</Text>

          <View style={styles.tagsWrapper}>
            {interests.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.tag,
                  selectedInterests.includes(item) && styles.tagSelected,
                ]}
                onPress={() => toggleInterest(item)}
              >
                <Text
                  style={[
                    styles.tagText,
                    selectedInterests.includes(item) && styles.tagTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <LinearGradient
            colors={['#698CFF', '#9B84DF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.finishButtonGradient}
          >
            <TouchableOpacity onPress={onFinish} style={styles.finishButtonInner}>
              <Text style={styles.finishText}>Finish</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DesignicheScreen;
