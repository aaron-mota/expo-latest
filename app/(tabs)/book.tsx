import { StyleSheet, ScrollView, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Tab() {
  return (
    <ScrollView>
      <View style={styles.content}>
        <ThemedView safeArea style={styles.titleContainer}>
          <ThemedText type="title">Book</ThemedText>
          <ThemedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec nisl aliquam</ThemedText>
        </ThemedView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingBottom: 32,
    gap: 16,
  },
  titleContainer: {
    backgroundColor: 'transparent',
    marginTop: 6,
    paddingHorizontal: 32,
    gap: 8,
  },
});
