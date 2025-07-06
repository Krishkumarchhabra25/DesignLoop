// components/svgImageComponents/XIcon.tsx
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const XIcon = ({ style }: Props) => {
  return (
    <Svg width={30} height={28} style={style} viewBox="0 0 30 28" fill="none">
      <Defs>
        <ClipPath id="clip0">
          <Rect width="30" height="27" fill="white" transform="translate(0 0.5)" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0)">
        <Path
          d="M23.6145 0.5H28.1928L18.1928 11.96L30 27.5H20.7229L13.494 18.08L5.18072 27.5H0.60241L11.3253 15.26L0 0.5H9.51807L16.0843 9.14L23.6145 0.5ZM21.988 24.74H24.5181L8.13253 3.08H5.36145L21.988 24.74Z"
          fill="#0F0F0F"
        />
      </G>
    </Svg>
  );
};

export default XIcon;
