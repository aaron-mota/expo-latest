import { StyleSheet, ScrollView, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Skeleton } from '@/components/Skeleton';

export default function Tab() {
  return (
    <ScrollView>
      <View style={styles.content}>
        <ThemedView safeArea style={styles.titleContainer}>
          <ThemedText type="title">Journal</ThemedText>
          <ThemedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec nisl aliquam</ThemedText>
        </ThemedView>
        <JournalEntries />
      </View>
    </ScrollView>
  );
}

function JournalEntries() {
  return Array.from({ length: 6 }).map((_, index) => (
    <ThemedView key={index} style={styles.journalEntry}>
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
    paddingHorizontal: 32,
    gap: 8,
  },
  journalEntry: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
});
