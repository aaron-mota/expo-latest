import { StyleSheet, ScrollView, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Skeleton } from '@/components/Skeleton';
import { useThemeColor } from '@/hooks/useThemeColor';
import { theme } from '@/theme';

export default function Tab() {
  return (
    <ScrollView>
      <View style={styles.content}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Journal</ThemedText>
          <ThemedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec nisl aliquam</ThemedText>
        </ThemedView>
        <JournalEntries />
      </View>
    </ScrollView>
  );
}

function JournalEntries() {
  const shadow = useThemeColor({ light: theme.dropShadow, dark: undefined });

  return Array.from({ length: 6 }).map((_, index) => (
    <ThemedView key={index} style={[styles.journalEntry, shadow]}>
      {/* // <ThemedView key={index} style={[styles.journalEntry]}> */}
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Skeleton variant="circular" />
        <Skeleton variant="text" width={40} />
      </View>
      <View style={{ flex: 1, marginLeft: 16, gap: 8 }}>
        <ThemedText>Journal entry {index + 1}</ThemedText>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </View>
    </ThemedView>
  ));
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingBottom: 32,
    gap: 16,
  },
  titleContainer: {
    backgroundColor: 'transparent',
    paddingTop: 16,
    paddingHorizontal: 32,
    gap: 8,
  },
  journalEntry: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.15,
  },
});
