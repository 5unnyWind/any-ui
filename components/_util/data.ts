import chunk from "lodash.chunk";
import startOfWeek from "date-fns/startOfWeek";
import addDays from "date-fns/addDays";
import setDay from "date-fns/setDay";
import format from "date-fns/format";

export function buildWeeks(year: any, month: any) {
  const firstDayOfMonth = new Date(parseInt(year), parseInt(month) - 1);
  const firstDayOfCanlendar = startOfWeek(firstDayOfMonth, { weekStartsOn: 0 });

  const weeks = new Array(6 * 7)
    .fill(0)
    .map((_, i) => addDays(firstDayOfCanlendar, i));
  return chunk(weeks, 7);
}

export function buildDayNames(weekStartOn: any) {
  return new Array(7)
    .fill(0)
    .map((_, i) => (i + weekStartOn) % 7)
    .map((dayOfWeek) => {
      const day = setDay(new Date(0), dayOfWeek);
      return format(day, "EEEEEE");
    });
}

export function years(year: number) {
  const years: Array<number> = [];
  for (let i = year - 10; i <= year + 10; i++) {
    years.push(i);
  }

  return years;
}

export const monthes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const monthesList = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
