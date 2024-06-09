import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function DetailsPage() {
  return (
    <View style={styles.container}>
      <Text>Text page</Text>
      <Link asChild href="/test/fakeName">
        <Pressable>
          <Text style={styles.button}>Go to dynamic page</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 1,
    fontSize: 18,
    color: 'teal',
  },
});
