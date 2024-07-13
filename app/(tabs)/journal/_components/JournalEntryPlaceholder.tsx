import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { theme } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { TJournalEntry } from '../_lib';
import { Skeleton } from '@/components/Skeleton';

interface Props {
  doc: TJournalEntry;
}

export function JournalEntryPlaceholder({ doc }: Props) {
  return (
    <ThemedView style={styles.container}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Skeleton variant="circular" />
        <Skeleton variant="text" width={40} />
      </View>
      <View style={{ flex: 1, marginLeft: 16, gap: 8 }}>
        <ThemedText>{doc.title}</ThemedText>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    ...theme.dropShadow,
  },
});
