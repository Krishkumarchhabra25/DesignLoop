// components/svgImageComponents/DesignLoop.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Bubble from './Bubble';
import Cloud from './Cloud';

const DesignLoop = () => {
  return (
    <View style={styles.container}>
      <Svg width={360} height={320} viewBox="0 0 368 320" fill="none">
        <Path
          d="M208 0C296.366 0 368 71.6344 368 160C368 248.366 296.366 320 208 320C201.923 320 195.925 319.66 190.023 319H-106C-112.627 319 -118 313.627 -118 307C-118 300.373 -112.627 295 -106 295H201.88C201.917 295 201.931 294.953 201.901 294.932C201.87 294.911 201.887 294.863 201.924 294.864C203.938 294.953 205.964 295 208 295C282.558 295 343 234.558 343 160C343 85.4416 282.558 25 208 25C133.442 25 73 85.4416 73 160C73 167.977 73.6916 175.792 75.0184 183.389C75.0743 183.708 74.8248 184 74.5 184C63.7777 184 48.8105 179.444 48.2345 168.737C48.0788 165.845 48 162.932 48 160C48 71.6344 119.634 0 208 0Z"
          fill="white"
          fillOpacity={0.05}
        />
      </Svg>

      <View style={styles.cloud}>
        <Cloud />
      </View>

      <View style={styles.bubble}>
        <Bubble />
        <Text style={styles.bubbleText}>Hello</Text>
      </View>
    </View>
  );
};

export default DesignLoop;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 78,
    
    marginRight:25,
    position: 'relative',
  },
  cloud: {
    position: 'absolute',
    top: 70,
    marginLeft:25,
    alignSelf: 'center',
  },
bubble: {
  position: 'absolute',
  top: 187,
  right: 70,
  width: 105,
  height: 51,
  transform: [{ rotate: '-12.312deg' }],
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1.2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 4, // Android
},

  bubbleText: {
    position: 'absolute',
    top: 14,
    left: 24,
    color: '#fff',
    fontSize: 22.5,
    fontWeight: '500',
    transform: [{ rotate: '-12.312deg' }],
  },
});
