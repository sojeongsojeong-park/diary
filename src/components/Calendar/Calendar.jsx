import React, { useState } from "react";
import { addMonths, format, subMonths } from "date-fns";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <div className='headerContainer'>
      <BsArrowLeft onClick={prevMonth} />
      <div className='monthContainer'>
        <span className='month'>{format(currentMonth, "M")}월</span>
        <span className='year'>{format(currentMonth, "yyyy")}년</span>
      </div>
      <BsArrowRight onClick={nextMonth} />
    </div>
  );
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  return (
    <div className='calendar'>
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <div className='days'>DAYS</div>
      <div className='cells'>CELLS</div>
    </div>
  );
};

export default Calendar;
