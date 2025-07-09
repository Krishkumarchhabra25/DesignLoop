import { styles } from '@/styles/PortfolioTabStyles/portfolioTab.styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, TextInput, View } from 'react-native';

const socialLinks = [
  {
    label: 'Enter behance username',
    icon: require('@/assets/images/behance.png'),
    borderColor: '#0057FF',
  },
  {
    label: 'Enter Dribble username',
    icon: require('@/assets/images/dribble.png'),
    borderColor: '#EA4C89',
  },
  {
    label: 'Enter Figma Community username',
    icon: require('@/assets/images/figma.png'),
    borderColor: '#A259FF',
  },
  {
    label: 'Enter Github Username',
    icon: require('@/assets/images/github.png'),
    borderColor: '#000000',
  },
  {
    label: 'Enter Medium Username',
    icon: require('@/assets/images/medium.png'),
    borderColor: '#000000',
  },
  {
    label: 'Enter YouTube Channel name',
    icon: require('@/assets/images/youtube.png'),
    borderColor: '#FF0000',
  },
  {
    label: 'Enter your website URL',
    icon: require('@/assets/images/internet.png'),
    borderColor: '#0057FF',
  },
];

const PortfolioTab = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {socialLinks.map((item, index) => (
        <View key={index} style={[styles.inputContainer, { borderColor: item.borderColor }]}>
          <View style={styles.leftSection}>
            <Image source={item.icon} style={styles.icon} resizeMode="contain" />
            <TextInput
              placeholder={item.label}
              placeholderTextColor="#888"
              style={styles.input}
            />
          </View>
          <Ionicons name="checkmark-circle" size={20} color="#6C8EF5" />
        </View>
      ))}
    </ScrollView>
  );
};

export default PortfolioTab;
