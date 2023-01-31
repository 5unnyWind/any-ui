import chunk from "lodash/chunk";
import startOfWeek from "date-fns/startOfWeek";
import addDays from "date-fns/addDays";
import setDay from "date-fns/setDay";
import format from "date-fns/format";

export function buildWeeks(year: any, monthIndex: any) {
  const firstDayOfMonth = new Date(parseInt(year), parseInt(monthIndex));
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
