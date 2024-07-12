import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  safeArea?: boolean;
};

export function ThemedView({ style, lightColor, darkColor, safeArea, ...otherProps }: ThemedViewProps) {
  const insets = useSafeAreaInsets();
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor, paddingTop: safeArea ? insets.top : undefined }, style]} {...otherProps} />;
}
