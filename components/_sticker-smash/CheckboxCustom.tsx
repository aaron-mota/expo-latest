import { GestureResponderEvent, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-root-toast';

interface Props {
  checked: boolean;
  onChange: (e: GestureResponderEvent) => void;
  buttonStyle: StyleSheet.NamedStyles<{}>;
  activeIconProps?: Omit<React.ComponentProps<typeof Ionicons>, 'name'>;
  inactiveIconProps?: Omit<React.ComponentProps<typeof Ionicons>, 'name'>;
  activeButtonStyle?: StyleSheet.NamedStyles<{}>;
  inactiveButtonStyle?: StyleSheet.NamedStyles<{}>;
}

export default function CheckboxCustom({
  checked,
  onChange,
  activeIconProps = {},
  inactiveIconProps = {},
  buttonStyle = {},
  activeButtonStyle = {},
  inactiveButtonStyle = {},
}: Props) {
  const iconProps = checked ? activeIconProps : inactiveIconProps;
  return (
    <Pressable onPress={onChange} style={[buttonStyle, checked ? activeButtonStyle : inactiveButtonStyle]}>
      {checked && <Ionicons name="checkmark" size={24} color="white" {...iconProps} />}
      {checked && (
        <Toast visible={checked} hideOnPress>
          Thanks for subscribing!
        </Toast>
      )}
    </Pressable>
  );
}
