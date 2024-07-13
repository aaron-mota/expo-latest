import { TJournalEntry } from './types';

export const data: TJournalEntry[] = Array.from({ length: 6 }).map((_, index) => ({
  title: `Journal entry ${index + 1}`,
  date: '2021-10-01',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec nisl aliquam',
  image: `https://i.pravatar.cc/300?img=${index + 1}`,
}));
