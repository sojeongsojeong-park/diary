import React from "react";

const RenderDays = () => {
  const date = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className='daysContainer'>
      <ul>
        {date.map((day, idx) => {
          return <li key={idx}>{day}</li>;
        })}
      </ul>
    </div>
  );
};

export default RenderDays;
