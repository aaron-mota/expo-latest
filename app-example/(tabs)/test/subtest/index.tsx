import { useRouter } from 'expo-router';
import { View, StyleSheet, Button } from 'react-native';

export default function DetailsPage() {
  const router = useRouter();

  const handleDismiss = () => {
    router.dismissAll();
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => router.push('/test/subtest')} title="Open subtest page" />
      <Button onPress={() => router.push('/test/subtest/section')} title="Open subtest/section page" />
      <Button title="Go to first screen" onPress={() => handleDismiss()} />
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
