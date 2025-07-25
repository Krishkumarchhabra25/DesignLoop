import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const FacebookIcon = ({ style }: Props) => {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" style={style}>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="30" height="30" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0)">
        <Path
          d="M30 15C30 6.71636 23.2836 0 15 0C6.71635 0 0 6.71636 0 15C0 22.4863 5.48446 28.6922 12.6564 29.8186V19.3369H8.84686V15H12.6564V11.6946C12.6564 7.93559 14.8966 5.85783 18.3223 5.85783C19.9634 5.85783 21.6805 6.15103 21.6805 6.15103V9.8425H19.7884C17.9257 9.8425 17.3436 10.9985 17.3436 12.1861V15H21.5033L20.8388 19.3369H17.3436V29.8186C24.5155 28.6943 30 22.4884 30 15Z"
          fill="#1977F3"
        />
        <Path
          d="M20.8388 19.337L21.5033 15.0001H17.3436V12.1861C17.3436 11.0006 17.9236 9.84258 19.7884 9.84258H21.6805V6.15112C21.6805 6.15112 19.9634 5.85791 18.3223 5.85791C14.8966 5.85791 12.6564 7.93357 12.6564 11.6946V15.0001H8.84686V19.337H12.6564V29.8187C13.4201 29.9389 14.2026 30.0001 15 30.0001C15.7974 30.0001 16.5799 29.9368 17.3436 29.8187V19.337H20.8388Z"
          fill="#FFFFFF"
        />
      </G>
    </Svg>
  );
};

export default FacebookIcon;
