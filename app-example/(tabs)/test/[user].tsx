import { Link, Stack, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image } from 'react-native';

function LogoTitle() {
  return <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />;
}

const friends = ['charlie', 'james', 'roger'];

export default function DetailsPage() {
  const glob = useGlobalSearchParams();
  const local = useLocalSearchParams();

  console.log(`
Local: ${JSON.stringify(local)}
Global: ${JSON.stringify(glob)}
  `);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: () => <LogoTitle />,
        }}
      />

      <Text>User: {local.user}</Text>
      {friends.map((friend) => (
        <Link key={friend} href={`/test/roger?q=${friend}`}>
          Visit {friend}
        </Link>
      ))}
      <Link href={`/test`}>Visit Test</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  button: {
    padding: 1,
    fontSize: 18,
    color: 'teal',
  },
});
