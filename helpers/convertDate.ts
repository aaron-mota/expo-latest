import dayjs, { Dayjs } from 'dayjs';

export function convertDate(date: string | Dayjs, format = 'MM/DD/YY') {
  return dayjs(date).format(format);
}
