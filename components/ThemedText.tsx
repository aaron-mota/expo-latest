import { Text, type TextProps, StyleSheet, TextStyle } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { theme, ThemeProps } from '@/theme';
import Animated from 'react-native-reanimated';

export type ThemedTextProps = ThemeProps &
  TextProps & {
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
    marginBottom?: number;
    fontSize?: TextStyle['fontSize'];
    fontWeight?: 'light' | 'medium' | 'bold';
    italic?: boolean;
    animated?: boolean;
  };

export function ThemedText({
  type = 'default',
  style,
  lightColor,
  darkColor,
  marginBottom = 0,
  fontSize = theme.fontSize16,
  fontWeight,
  italic,
  animated,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({
    light: lightColor || theme.colorBlack,
    dark: darkColor || theme.colorWhite,
  });
  const fontFamily = (() => {
    if (fontWeight === 'light') {
      return italic ? theme.fontFamilyLightItalic : theme.fontFamilyLight;
    } else if (fontWeight === 'bold') {
      return italic ? theme.fontFamilyBoldItalic : theme.fontFamilyBold;
    } else {
      return italic ? theme.fontFamilyItalic : theme.fontFamily;
    }
  })();

  if (animated) {
    return (
      <Animated.Text
        style={[
          type === 'default' ? styles.default : undefined,
          type === 'title' ? styles.title : undefined,
          type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
          type === 'subtitle' ? styles.subtitle : undefined,
          type === 'link' ? styles.link : undefined,
          { color, marginBottom, fontSize, fontFamily },
          style,
        ]}
        {...rest}
      />
    );
  }

  return (
    <Text
      style={[
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        { color, marginBottom, fontSize, fontFamily },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
