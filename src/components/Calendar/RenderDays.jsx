import React from "react";

import classes from "./RenderDays.module.css";

const RenderDays = () => {
  const date = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className={classes.daysContainer}>
      <ul>
        {date.map((day, idx) => {
          return <li key={idx}>{day}</li>;
        })}
      </ul>
    </div>
  );
};

export default RenderDays;
