import React from "react";
import { useContext } from "react";
import { DiaryContext } from "../../context/DiaryContext";

import classes from "./Diary.module.css";

function Diary() {
  const openHandler = useContext(DiaryContext);
  const data = openHandler.openState.data;
  console.log(data);
  return (
    <section className={classes.diaryContainer}>
      <h2>{data.title}</h2>
      <span>{data.date}</span>
      <img src={data.photo} />
      <p>{data.content}</p>
      <div className={classes.buttonContainer}>
        <button>delete</button>
        <button>modify</button>
        <button
          onClick={() => {
            openHandler.updateOpenHandler(false, "", null);
          }}
        >
          ❌close
        </button>
      </div>
    </section>
  );
}

export default Diary;
