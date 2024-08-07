// import AntDesign from '@expo/vector-icons/build/AntDesign';
import Entypo from '@expo/vector-icons/build/Entypo';
import { useRouter } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useThemeColor } from '@/hooks/useThemeColor';
import { theme } from '@/theme';

export function ButtonBack() {
  const router = useRouter();
  const color = useThemeColor({
    light: theme.light.icon,
    dark: theme.dark.icon,
  });
  return (
    <TouchableOpacity onPress={router.back} hitSlop={40} style={styles.button}>
      {Platform.OS === 'ios' ? (
        <Entypo name="chevron-left" size={24} color={color} />
      ) : (
        // <AntDesign name="closecircle" size={24} color={color} />
        <Entypo name="chevron-left" size={24} color={color} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    // marginLeft: -10,
  },
});
