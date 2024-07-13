import { Image } from 'expo-image';
import { View } from 'react-native';
import { ThemedText } from './ThemedText';

interface Props {
  source?: string;
  size?: number;
}

export function Avatar({ source, size = 40 }: Props) {
  return (
    <>
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {source ? (
          <View
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
              overflow: 'hidden',
            }}
          >
            <Image source={{ uri: source }} style={{ width: size, height: size }} />
          </View>
        ) : (
          <ThemedText style={{ color: 'rgba(0, 0, 0, 0.5)' }}>?</ThemedText>
        )}
      </View>
    </>
  );
}
