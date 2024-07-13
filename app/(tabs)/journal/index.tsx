import { StyleSheet, ScrollView, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { data } from './_lib';
import { JournalEntry } from './_components';

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
  return data.map((doc, index) => <JournalEntry key={index} doc={doc} />);
  // return data.map((doc, index) => <JournalEntryPlaceholder key={index} doc={doc} />);
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
});
