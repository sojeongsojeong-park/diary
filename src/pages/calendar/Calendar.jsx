import React, { useState, useContext } from "react";
import { addMonths, subMonths, format } from "date-fns";
import RenderHeader from "../../components/Calendar/RenderHeader";
import RenderDays from "../../components/Calendar/RenderDays";
import RenderCells from "../../components/Calendar/RenderCells";
import { HiOutlinePlus } from "react-icons/hi";

import classes from "./Calendar.module.css";
import { DiaryContext } from "../../context/DiaryContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import Modal from "../../components/Modal/Modal";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const openHandler = useContext(DiaryContext);
  const { user } = useAuthContext();
  const { documents, error } = useCollection("diary", ["uid", "==", user.uid]);

  console.log(openHandler.openState);
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
        documents={documents !== null && documents}
      />

      <div
        className={classes.addDiary}
        onClick={() => {
          openHandler.updateOpenHandler(
            true,
            format(selectedDate, "yyyyMMMdd"),
            openHandler.openState.data
          );
        }}
      >
        <HiOutlinePlus className={classes.plus} />
      </div>
      {openHandler.openState.isOpen && <Modal />}
      {error && <strong>{error}</strong>}
    </div>
  );
};

export default Calendar;
