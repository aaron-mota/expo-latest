import { Link, Stack, useLocalSearchParams, usePathname, useRouter, useSegments } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable, TextInput } from 'react-native';

function LogoTitle() {
  return <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />;
}

export default function DetailsPage() {
  const router = useRouter();
  const local = useLocalSearchParams<{ everything: string[]; q?: string }>();
  const global = useLocalSearchParams();

  const [showParamsTitle, setShowParamsTitle] = useState(false);
  const [count, setCount] = useState(0);

  /* @info */
  const pathname = usePathname();
  const segments = useSegments<['test'] | ['test', '[name]']>();
  /* @end */

  const name0 = segments[0]; // Assuming the structure is ['profile', 'user']
  const name1 = segments[1]; // Assuming the structure is ['profile', 'user']
  // const name2 = segments[2]; // Assuming the structure is ['profile', 'user']

  const [search, setSearch] = useState(local?.everything?.at(0) ?? '');

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          // update title: based on params
          // title: (local.name as string) ?? undefined,
          // title: (local.everything[0] as string) ?? undefined,
          // set title: additional components (e.g. image,  button)
          // headerTitle: (props) => <LogoTitle {...props} />,
          headerTitle: () => (!showParamsTitle ? <LogoTitle /> : undefined),
          headerRight: () => <Button onPress={() => setCount((c) => c + 1)} title="Update count" />,
        }}
      />
      <TextInput
        value={search}
        onChangeText={(search) => {
          setSearch(search);
          router.setParams({ q: search });
        }}
        placeholderTextColor="#A0A0A0"
        placeholder="Search"
        style={{
          borderRadius: 12,
          backgroundColor: '#fff',
          fontSize: 24,
          color: '#000',
          margin: 12,
          padding: 16,
        }}
      />
      <Text>{JSON.stringify(local)}</Text>
      <Text>{JSON.stringify(global)}</Text>
      <Text>{pathname}</Text>
      <Text>Name0: {name0}</Text>
      <Text>Name1: {name1}</Text>
      {/* <Text>Name2: {name2}</Text> */}
      <Text
        onPress={() => {
          setShowParamsTitle(true);
          router.setParams({ name: String(Date.now()) });
        }}
      >
        Update the titleee
      </Text>
      <Text>Count: {count}</Text>
      <Button onPress={() => setShowParamsTitle(!showParamsTitle)} title="Toggle title" />
      <Link asChild href="/test/subtest">
        <Pressable>
          <Text style={styles.button}>Go to subtest page</Text>
        </Pressable>
      </Link>
      <Link asChild href="/test/modal">
        <Pressable>
          <Text style={styles.button}>Open modal page</Text>
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
