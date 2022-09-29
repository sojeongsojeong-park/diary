import React, { useState, useContext } from "react";
import { addMonths, subMonths, format } from "date-fns";
import RenderHeader from "../../components/Calendar/RenderHeader";
import RenderDays from "../../components/Calendar/RenderDays";
import RenderCells from "../../components/Calendar/RenderCells";
import { HiOutlinePlus } from "react-icons/hi";

import classes from "./Calendar.module.css";
import { DiaryContext } from "../../context/DiaryContext";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const openHandler = useContext(DiaryContext);

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
  const openDiaryHandler = (date) => {
    openHandler.updateOpenHandler(true, date);
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
      <div
        className={classes.addDiary}
        onClick={() => {
          openDiaryHandler(format(selectedDate, "yyyyMMMdd"));
        }}
      >
        <HiOutlinePlus className={classes.plus} />
      </div>
    </div>
  );
};

export default Calendar;
