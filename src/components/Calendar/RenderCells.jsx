import React from "react";
import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import classes from "./RenderCells.module.css";

const RenderCells = ({
  currentMonth,
  selectedDate,
  onDateClick,
  documents,
}) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      let test;
      documents &&
        documents.forEach((doc) => {
          if (doc.date === format(day, "yyyyMMMdd")) {
            test = doc;
          }
        });
      days.push(
        <li
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? classes.disabled
              : isSameDay(day, selectedDate)
              ? classes.selected
              : format(currentMonth, "M") !== format(day, "M")
              ? classes.notValid
              : classes.valid
          }`}
          key={day}
          onClick={() => {
            onDateClick(cloneDay);
          }}
          style={{
            backgroundImage: `url(${test && test.photo})`,
          }}
        >
          <span
            className={
              format(currentMonth, "M") !== format(day, "M")
                ? `${classes.noValidText}`
                : ""
            }
          >
            {formattedDate}
          </span>
        </li>
      );
      day = addDays(day, 1);
    }
    rows.push(<ul key={day}>{days}</ul>);
    days = [];
  }

  return <div className={classes.cellsContainer}>{rows}</div>;
};

export default RenderCells;
