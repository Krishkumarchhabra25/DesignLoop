import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Defs, Path, RadialGradient, Stop } from 'react-native-svg';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const InstagramIcon = ({ style }: Props) => {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      style={style} // ✅ pass style to SVG
    >
      <Defs>
        <RadialGradient id="grad1" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor="#FF005F" />
          <Stop offset="100%" stopColor="#FC01D8" />
        </RadialGradient>
      </Defs>
      <Path
        d="M15.0049 0C8.74251 0 6.911 0.00646289 6.55499 0.0359999..."
        fill="url(#grad1)"
      />
    </Svg>
  );
};

export default InstagramIcon;
