import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  // ✅ Hook is always called at the top level
  const scheme = useColorScheme(); // could be 'light' | 'dark' | null
  const theme: 'light' | 'dark' = scheme === 'dark' ? 'dark' : 'light';

  const colorFromProps = props[theme];
  return colorFromProps ?? Colors[theme][colorName];
}
