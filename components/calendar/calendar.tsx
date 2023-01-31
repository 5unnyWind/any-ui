import React, { memo, useMemo } from "react";
import type { FC, ReactNode } from "react";
import { buildWeeks, buildDayNames } from "../_util/data";
import getDate from "date-fns/getDate";

interface BaseCalendarProps {
  year?: number;
  monthIndex?: number;
  children?: ReactNode;
}

const Calendar: FC<BaseCalendarProps> = (props) => {
  const { year, monthIndex } = props;

  const weeks = useMemo(() => buildWeeks(year, monthIndex), [year, monthIndex]);
  const dayNames = useMemo(() => buildDayNames(0), []);

  return (
    <>
      <table>
        <thead>
          <tr>
            {dayNames.map((dayName, i) => (
              <th key={i}>{dayName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                // eslint-disable-next-line react/jsx-key
                <td>{getDate(day)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

Calendar.defaultProps = {
  year: 2020,
  monthIndex: 8,
};

export default memo(Calendar);
