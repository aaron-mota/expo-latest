import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsPage() {
  return (
    <View style={styles.container}>
      <Text>Text page</Text>
      <Link href="/test/fakeName">Go to dynamic page</Link>
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
