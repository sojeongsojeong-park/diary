import React from "react";
import { format } from "date-fns";
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

export default RenderHeader;
