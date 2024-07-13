import { Avatar } from '@/components/Avatar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { theme } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { TJournalEntry } from '../_lib';

interface Props {
  doc: TJournalEntry;
}

export function JournalEntry({ doc }: Props) {
  return (
    <ThemedView style={styles.container}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Avatar size={64} source={doc.image} />
        <ThemedText>{doc.date}</ThemedText>
      </View>
      <View style={{ flex: 1, marginLeft: 16, gap: 8 }}>
        <ThemedText>{doc.title}</ThemedText>
        <ThemedText>{doc.date}</ThemedText>
        <ThemedText>{doc.content}</ThemedText>
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
