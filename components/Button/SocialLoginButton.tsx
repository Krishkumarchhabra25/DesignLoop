  import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

  interface SocialIconButtonProps {
    icon?: React.ReactNode;
    text: string;
    onPress?: (event: GestureResponderEvent) => void;
    useGradient?: boolean;
  }

  const SocialIconButton: React.FC<SocialIconButtonProps> = ({
    icon,
    text,
    onPress,
    useGradient = false,
  }) => {
    const ButtonContent = () => (
      <View style={styles.inner}>
        {icon}
         <Text style={[styles.text, useGradient && styles.whiteText]}>{text}</Text>
      </View>
    );

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.wrapper}>
        {useGradient ? (
          <LinearGradient
            colors={[
              '#9B84DF',
              '#698CFF',
              'rgba(89, 132, 245, 0.96)',
              '#6F8DE7',
              '#9F84DA',
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[-0.0366, 0.1676, 0.4116, 0.7863, 0.9949]}
            style={styles.gradient}
          >
            <ButtonContent  />
          </LinearGradient>
        ) : (
          <View style={styles.nonGradient}>
            <ButtonContent />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  export default SocialIconButton;

  const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      maxWidth: 343,
      borderRadius: 100,
      overflow: 'hidden',
    },
    gradient: {
      borderRadius: 100,
      paddingVertical: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    nonGradient: {
      backgroundColor: '#fff',
      borderColor: '#9B84DF',
      borderWidth: 1,
      borderRadius: 100,
      paddingVertical: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inner: {
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 16,
      fontWeight: '500',
      color: '#000',
    },
      whiteText: {
    color: '#fff',
  },
  });
