import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

function LogoTitle() {
  return <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />;
}

export default function DetailsPage() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [showParamsTitle, setShowParamsTitle] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          // update title: based on params
          title: (params.name as string) ?? undefined,
          // set title: additional components (e.g. image,  button)
          // headerTitle: (props) => <LogoTitle {...props} />,
          headerTitle: () => (!showParamsTitle ? <LogoTitle /> : undefined),
          headerRight: () => <Button onPress={() => setCount((c) => c + 1)} title="Update count" />,
        }}
      />
      <Text
        onPress={() => {
          setShowParamsTitle(true);
          router.setParams({ name: 'Updated' });
        }}
      >
        Update the title
      </Text>
      <Text>Count: {count}</Text>
      <Button onPress={() => setShowParamsTitle(!showParamsTitle)} title="Toggle title" />
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
});
