import React, { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import RenderHeader from "../../components/Calendar/RenderHeader";
import RenderDays from "../../components/Calendar/RenderDays";
import RenderCells from "../../components/Calendar/RenderCells";

import classes from "./Calendar.module.css";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day) => {
    setSelectedDate(day);
    console.log(selectedDate);
  };
  return (
    <div className={classes.calendar}>
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <RenderDays />
      <RenderCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </div>
  );
};

export default Calendar;
