import { Stack } from 'expo-router/stack';

// function LogoTitle() {
//   return <Ionicons name="disc-outline" size={32} color="white" onClick={() => } />;
// }

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen name="[name]" getId={({ params }) => String(Date.now())} />
      <Stack.Screen name="subtest" options={{ headerShown: false }} />
    </Stack>
  );
}
