import { styles } from '@/styles/profile/Profile.styles';
import React from 'react';
import { View } from 'react-native';
import Header from './components/header';
import Stats from './components/stats';
import TabRoutes from './components/tabroutes';

const ProfileScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Header />
      <Stats />
      <View style={{ flex: 1 }}>
        <TabRoutes />
      </View>
    </View>
  );
};

export default ProfileScreen;
