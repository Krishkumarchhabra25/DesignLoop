import { ASYNC_KYES } from '@/storage/asyncKeys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const ACCOUNT_PROGRESS_KEY = ASYNC_KYES.ACCOUNT_PROGRESS;

const useAccountProgress = () => {
  const [step, setStep] = useState<number | null>(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const savedStep = await AsyncStorage.getItem(ACCOUNT_PROGRESS_KEY);
        console.log('[useAccountProgress] Loaded from AsyncStorage:', savedStep);
        if (savedStep !== null) {
          setStep(Number(savedStep));
        }
      } catch (err) {
        console.error('[useAccountProgress] Error loading step:', err);
      }
    };

    fetchProgress();
  }, []);

  const updateStep = async (newStep: number) => {
    try {
      await AsyncStorage.setItem(ACCOUNT_PROGRESS_KEY, newStep.toString());
      console.log('[useAccountProgress] Step updated in AsyncStorage:', newStep);
      setStep(newStep);
    } catch (err) {
      console.error('[useAccountProgress] Error updating step:', err);
    }
  };

  const clearStep = async () => {
    try {
      await AsyncStorage.removeItem(ACCOUNT_PROGRESS_KEY);
      console.log('[useAccountProgress] Step cleared from AsyncStorage');
      setStep(null);
    } catch (err) {
      console.error('[useAccountProgress] Error clearing step:', err);
    }
  };

  return { step, updateStep, clearStep };
};

export default useAccountProgress;
