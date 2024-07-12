import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
import { theme, ThemeProps } from '@/theme';

export type ThemedViewProps = ThemeProps &
  ViewProps & {
    safeArea?: boolean;
    animated?: boolean;
  };

export function ThemedView({ style, lightColor, darkColor, safeArea, animated, ...otherProps }: ThemedViewProps) {
  const insets = useSafeAreaInsets();
  // const backgroundColor = useThemeColor({ light: lightColor ?? 'transparent', dark: darkColor ?? 'transparent' });
  const backgroundColor = useThemeColor({
    light: lightColor ?? theme.light.background,
    dark: darkColor ?? theme.dark.background,
  });

  if (animated) {
    return (
      <Animated.View
        style={[{ backgroundColor, paddingTop: safeArea ? insets.top : undefined }, style]}
        {...otherProps}
      />
    );
  }

  return <View style={[{ backgroundColor, paddingTop: safeArea ? insets.top : undefined }, style]} {...otherProps} />;
}
