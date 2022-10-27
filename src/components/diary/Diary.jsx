import React from "react";
import { useContext } from "react";
import { DiaryContext } from "../../context/DiaryContext";
import { useFirestore } from "../../hooks/useFirestore";

import classes from "./Diary.module.css";

function Diary() {
  const openHandler = useContext(DiaryContext);
  const { deleteDocument } = useFirestore("diary");
  const data = openHandler.openState.data;
  return (
    <section className={classes.diaryContainer}>
      <h2>{data.title}</h2>
      <span>{data.date}</span>
      <img src={data.photo} />
      <p>{data.content}</p>
      <div className={classes.buttonContainer}>
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to delete it?")) {
              deleteDocument(data.id);
              openHandler.updateOpenHandler(false, "", data);
            }
          }}
        >
          delete
        </button>
        <button>modify</button>
        <button
          onClick={() => {
            openHandler.updateOpenHandler(false, "", data);
          }}
        >
          ❌close
        </button>
      </div>
    </section>
  );
}

export default Diary;
