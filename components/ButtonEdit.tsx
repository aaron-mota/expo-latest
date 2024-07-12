// import AntDesign from '@expo/vector-icons/build/AntDesign';
// import Entypo from '@expo/vector-icons/build/Entypo';
// import { useRouter } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { useThemeColor } from '@/hooks/useThemeColor';
// import { theme } from '@/theme';
import { ThemedText } from './ThemedText';

export function ButtonEdit() {
  // const router = useRouter();
  // const color = useThemeColor({
  //   light: theme.light.icon,
  //   dark: theme.dark.icon,
  // });
  return (
    // <TouchableOpacity onPress={router.back} hitSlop={40} style={styles.button}>
    <TouchableOpacity onPress={() => null} hitSlop={40} style={styles.button}>
      {Platform.OS === 'ios' ? (
        <ThemedText>Edit</ThemedText>
      ) : (
        // <AntDesign name="closecircle" size={24} color={color} />
        <ThemedText>Edit</ThemedText>
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
