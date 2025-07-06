import AccountSetupLayout from '@/layouts/AccountSetupLayout';
import { Stack } from 'expo-router';

export default function AccountSetupLayoutWrapper() {
  return (
    <AccountSetupLayout>
<Stack screenOptions={{ headerShown: false }} />
    </AccountSetupLayout>
  );
}
