import { Pressable, type PressableProps, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface Props extends PressableProps {
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
  label: string;
}

export default function IconButton({ icon, label, ...props }: Props) {
  return (
    <Pressable style={styles.iconButton} {...props}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});
