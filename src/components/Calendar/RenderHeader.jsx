import React from "react";
import { format } from "date-fns";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import classes from "./RenderHeader.module.css";

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <div className={classes.headerContainer}>
      <BsArrowLeft className={classes.left} onClick={prevMonth} />
      <div className={classes.monthContainer}>
        <span className={classes.month}>{format(currentMonth, "MMM")}</span>
        <span className={classes.year}>{format(currentMonth, "yyyy")}</span>
      </div>
      <BsArrowRight className={classes.right} onClick={nextMonth} />
    </div>
  );
};

export default RenderHeader;
