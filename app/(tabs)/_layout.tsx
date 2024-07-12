import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
import { Platform } from 'react-native';
import { ButtonBack } from '@/components/ButtonBack';
// import { TabBarButton } from '@/components/TabBarButton';
// import { Feather } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { theme } from '@/theme';
import { ButtonEdit } from '@/components/ButtonEdit';

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  // react conf app
  const tabBarBackgroundColor = useThemeColor({
    light: theme.light.background,
    dark: theme.dark.background,
  });

  const tabBarActiveTintColor = useThemeColor({
    light: theme.light.tint,
    dark: theme.dark.tint,
    // light: theme.colorReactDarkBlue,
    // dark: theme.colorWhite,
  });

  const tabBarInactiveTintColor = useThemeColor({
    light: theme.colorGrey,
    dark: `rgba(255, 255, 255, 0.35)`,
  });

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarActiveTintColor,
        tabBarInactiveTintColor,
        tabBarStyle: {
          backgroundColor: tabBarBackgroundColor,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="book"
        options={{
          title: 'Book',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
          // tabBarButton: (props) => (
          //   <TabBarButton
          //     {...props}
          //     activeTintColor={tabBarActiveTintColor}
          //     inactiveTintColor={tabBarInactiveTintColor}
          //     icon={({ color }) => <Feather size={24} name="calendar" color={color} />}
          //   />
          // ),
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          title: 'Journal',
          headerShown: true,
          // headerTitle: 'Journal2',
          headerLeft: () => (Platform.OS === 'ios' ? <ButtonBack /> : null),
          headerRight: () => (Platform.OS === 'ios' ? <ButtonEdit /> : null),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="scale"
        options={{
          title: 'Scale',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Join now!',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dev"
        options={{
          title: 'dev',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
