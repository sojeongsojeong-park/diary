import React, { useEffect, useState, useContext } from "react";
import { DiaryContext } from "../../context/DiaryContext";
import { useFirestore } from "../../hooks/useFirestore";

import classes from "./DiaryForm.module.css";

const DiaryForm = ({ uid }) => {
  const openHandler = useContext(DiaryContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(openHandler.openState.date);
  const { addDocument, response } = useFirestore("diary");

  useEffect(() => {
    if (response.success) {
      setTitle("");
      setContent("");
    }
  }, [response.success]);
  const handleData = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else if (e.target.id === "date") {
      setDate(e.target.value);
    } else if (e.target.id === "content") {
      setContent(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ uid, title, content });
  };

  return (
    <div className={classes.formContainer}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>record your day✨</legend>
          <label htmlFor='title'>Title of your day : </label>
          <input
            id='title'
            type='text'
            required
            onChange={handleData}
            value={title}
          />
          <label htmlFor='date'>Date is : </label>
          <input
            id='date'
            type='text'
            required
            onChange={handleData}
            value={date}
          />
          <label htmlFor='content'>How was your day? : </label>
          <textarea
            id='content'
            type='text'
            value={content}
            required
            onChange={handleData}
          ></textarea>

          <button type='submit'>✏️record</button>
          <button
            type='button'
            onClick={() => {
              openHandler.updateOpenHandler(false, "");
            }}
          >
            ❌close
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default DiaryForm;
