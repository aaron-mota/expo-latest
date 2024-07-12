import { Platform } from 'react-native';

/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const theme = {
  colorWhite: '#FFFFFF',
  colorBlack: '#051726',
  colorDarkBlue: '#051726',
  colorDarkestBlue: '#091725',
  colorLightGreen: '#9BDFB1',
  colorDarkGreen: '#1AC9A2',
  colorGrey: '#adb5bd',
  colorReactLightBlue: '#58C4DC',
  colorReactDarkBlue: '#087EA4',
  colorThemeLightGrey: '#FCFBFE',
  colorThemeGrey: '#F5F4F3',

  space4: 4,
  space8: 8,
  space12: 12,
  space16: 16,
  space24: 24,

  fontSize16: 16,
  fontSize18: 18,
  fontSize24: 24,
  fontSize32: 32,

  borderRadius6: 6,
  borderRadius10: 10,
  borderRadius20: 20,

  fontFamilyLight: 'FreightSansProLight-Regular',
  fontFamilyLightItalic: 'FreightSansProLight-Italic',
  fontFamily: 'FreightSansProBook-Regular',
  fontFamilyItalic: 'FreightSansProBook-Italic',
  fontFamilyBold: 'FreightSansProBold-Regular',
  fontFamilyBoldItalic: 'FreightSansProBold-Italic',

  dropShadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#adb5bd',
        shadowOffset: {
          width: 0,
          height: 3, // 0 (react conf app)
        },
        shadowOpacity: 0.4, // 0.15 (custom)
        shadowRadius: 2,
      },
      default: {},
    }),
  },

  light: {
    text: '#11181C',
    background: '#fff',
    activeContent: 'rgba(0,0,0, 0.1)',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    activeContent: 'rgba(255,255,255, 0.3)',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
