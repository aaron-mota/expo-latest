import { StyleSheet, ScrollView, View, type ViewProps, DimensionValue } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

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
        <ImagePlaceholder style={styles.imagePlaceholder} />
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

interface SkeletonProps extends ViewProps {
  variant?: 'rectangular' | 'text' | 'rounded'; // | 'circular';
  width?: DimensionValue;
  height?: DimensionValue;
}

function Skeleton(props: SkeletonProps) {
  const { variant = 'rectangular', height = '100%', width = '100%', style, ...otherProps } = props;

  const backgroundColor = { backgroundColor: 'rgba(0, 0, 0, 0.1)' };

  const skeletonStyles = {
    rectangular: {
      width: width,
      height: height,
    },
    // circular: {
    //   width: width,
    //   height: width,
    //   borderRadius: 1000,
    // },
    text: {
      width: width,
      height: 16,
      borderRadius: 4,
    },
    rounded: {
      width: width,
      height: height,
      borderRadius: 4,
    },
  };

  return <View style={[skeletonStyles[variant], backgroundColor, style]} {...otherProps} />;
}

function ImagePlaceholder(props: ViewProps) {
  return <View {...props} />;
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
  imagePlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  journalEntry: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    // borderRadius: 8,
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});
