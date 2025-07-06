import { Ionicons } from '@expo/vector-icons';
import React from 'react';

interface IconProps {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
}

export const IconSymbol: React.FC<IconProps> = ({ name, size = 24, color = '#000' }) => {
  return <Ionicons name={name} size={size} color={color} />;
};
