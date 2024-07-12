// import AntDesign from '@expo/vector-icons/build/AntDesign';
// import Entypo from '@expo/vector-icons/build/Entypo';
// import { useRouter } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native-gesture-handler';

// import { useThemeColor } from '@/hooks/useThemeColor';
// import { theme } from '@/theme';
import { ThemedText } from './ThemedText';

interface Props extends TouchableOpacityProps {
  label?: string;
}

export function ButtonCreate(props: Props) {
  const { style, onPress, children, label, ...rest } = props;
  // const router = useRouter();
  // const color = useThemeColor({
  //   light: theme.light.icon,
  //   dark: theme.dark.icon,
  // });

  const labelFinal = label ?? 'Add New';

  return (
    // <TouchableOpacity onPress={router.back} hitSlop={40} style={styles.button}>
    <TouchableOpacity onPress={onPress} hitSlop={40} style={styles.button} {...rest}>
      {children ? (
        children
      ) : Platform.OS === 'ios' ? (
        <ThemedText>{labelFinal}</ThemedText>
      ) : (
        // <AntDesign name="closecircle" size={24} color={color} />
        <ThemedText>{labelFinal}</ThemedText>
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
