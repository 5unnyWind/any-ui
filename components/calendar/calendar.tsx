import React, { memo, useMemo, useState } from "react";
import type { FC, ReactNode } from "react";
import {
  buildWeeks,
  buildDayNames,
  years,
  monthes,
  monthesList,
} from "../_util/data";
import getDate from "date-fns/getDate";
import dateFnsIsToday from "date-fns/isToday";
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import isSameDay from "date-fns/isSameDay";
import "./style/index.scss";
import classNames from "classnames";

export type CalendarType = "month" | "year";

interface BaseCalendarProps {
  calendarType?: CalendarType;
  year?: number;
  month?: number;
  day?: Date;
  children?: ReactNode;
}

const Calendar: FC<BaseCalendarProps> = (props) => {
  const { year, month, day, calendarType } = props;

  const [select, setSelect] = useState(day);
  const [selectMonth, setSelectMonth] = useState((month as number) + 1);
  const [selectYear, setSelectYear] = useState(year as number);
  const [CalendarType, setCalendarType] = useState(calendarType);

  const weeks = useMemo(
    () => buildWeeks(selectYear, selectMonth),
    [selectYear, selectMonth]
  );

  const dayNames = useMemo(() => buildDayNames(0), []);

  const monthClassname = classNames(
    "ai-calendar-header-date-month",
    CalendarType === "month" ? "on" : "off"
  );

  const yearClassname = classNames(
    "ai-calendar-header-date-year",
    CalendarType === "year" ? "on" : "off"
  );

  const handleClick = (day: Date) => {
    setSelect(day);
    setSelectMonth(getMonth(day) + 1);
    setSelectYear(getYear(day));
  };

  const handleClick2 = (month: number) => {
    setSelectMonth(month);
  };

  const selectMonthChange = (e: any) => {
    setSelectMonth(e.target.value);
  };

  const selectYearChange = (e: any) => {
    setSelectYear(parseInt(e.target.value));
  };

  const selectMonthCalendar = () => {
    setCalendarType("month");
  };

  const selectYearCalendar = () => {
    setCalendarType("year");
  };

  return (
    <>
      <div className="ai-calendar">
        <div className="ai-calendar-header">
          <div className="ai-calendar-header-name">Calendar header</div>
          <div className="ai-calendar-header-date">
            <button className={monthClassname} onClick={selectMonthCalendar}>
              Month
            </button>
            <button className={yearClassname} onClick={selectYearCalendar}>
              Year
            </button>
            <select
              value={selectYear}
              name="years"
              id="year-select"
              onChange={selectYearChange}
            >
              {years(selectYear).map((selectyear, i) => (
                <option key={i} value={selectyear}>
                  {selectyear}
                </option>
              ))}
            </select>
            <select
              value={selectMonth}
              name="monthes"
              id="month-select"
              onChange={selectMonthChange}
            >
              {monthes.map((month, i) => (
                <option key={i} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
        {CalendarType === "month" ? (
          <table className="ai-calendar-month-body">
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
                  {week.map((day, j) => {
                    // eslint-disable-next-line react/jsx-key
                    const isToday = dateFnsIsToday(day);
                    const isCurrentMonth =
                      getMonth(day) === (selectMonth as number) - 1;
                    const isSelect = isSameDay(day, select as Date);
                    const btnclassnames = classNames(
                      "date-btn",
                      isToday ? "isToday" : "notToday",
                      isCurrentMonth ? "isCurrentMonth" : "notCurrentMonth",
                      isSelect ? "isSelect" : "notSelect"
                    );
                    return (
                      <td key={j}>
                        <button
                          className={btnclassnames}
                          onClick={() => handleClick(day)}
                        >
                          {getDate(day)}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="ai-calendar-year-body">
            <tbody>
              {monthesList.map((monthList, i) => (
                <tr key={i}>
                  {monthList.map((_, j) => {
                    const isCurrentMonth = _ === getMonth(new Date()) + 1;

                    const isSelect = _ === (selectMonth as number);

                    const btnclassnames = classNames(
                      isCurrentMonth ? "isCurrentMonth" : "notCurrentMonth",
                      isSelect ? "isSelect" : "notSelect"
                    );
                    return (
                      <td key={j}>
                        <button
                          className={btnclassnames}
                          onClick={() => handleClick2(_)}
                        >
                          {_}月
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

Calendar.defaultProps = {
  calendarType: "month",
  year: getYear(new Date()),
  month: getMonth(new Date()),
  day: new Date(),
};

export default memo(Calendar);
