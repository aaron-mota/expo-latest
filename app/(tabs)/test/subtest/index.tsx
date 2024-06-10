import { useRouter } from 'expo-router';
import { View, StyleSheet, Button } from 'react-native';

export default function DetailsPage() {
  const router = useRouter();

  const handleDismiss = (count: number) => {
    router.dismiss(count);
  };

  return (
    <View style={styles.container}>
      <Button title="Go to first screen" onPress={() => handleDismiss(5)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
