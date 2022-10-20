import React, { useEffect, useState, useContext, useRef } from "react";
import { DiaryContext } from "../../context/DiaryContext";
import { useFirestore } from "../../hooks/useFirestore";
import classes from "./DiaryForm.module.css";

const DiaryForm = ({ uid }) => {
  const openHandler = useContext(DiaryContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");
  const [date, setDate] = useState(openHandler.openState.date);
  const fileInputRef = useRef();
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
    addDocument({ uid, title, date, photo, content });
    openHandler.updateOpenHandler(false, "", null);
  };

  const fildInputClickHandler = () => {
    fileInputRef.current.click();
  };
  const fileHandler = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((res) => {
      reader.onload = () => {
        setPhoto(reader.result);
        res();
      };
    });
  };

  return (
    <section className={classes.formContainer}>
      <form>
        <fieldset>
          <legend>record your day✨</legend>
          <div className={classes.inputContainer}>
            <label htmlFor='title'>Title of your day : </label>
            <input
              id='title'
              type='text'
              required
              onChange={handleData}
              value={title}
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor='date'>Date is : </label>
            <input
              id='date'
              type='text'
              required
              onChange={handleData}
              value={date}
            />
          </div>
          <div className={classes.photoContainer}>
            <label htmlFor='file'>show your day </label>
            <input
              id='file'
              type='file'
              ref={fileInputRef}
              required
              onChange={(e) => {
                fileHandler(e.target.files[0]);
              }}
              style={{ display: "none" }}
            />
            <div
              onClick={fildInputClickHandler}
              style={{
                width: "100px",
                height: "100px",
              }}
            >
              {photo === "" ? (
                <div className={classes.emptyPhoto} />
              ) : (
                <img src={photo} alt='uploaded' />
              )}
            </div>
          </div>
          <div className={classes.textareaContainer}>
            <label htmlFor='content'>How was your day? </label>
            <textarea
              id='content'
              type='text'
              value={content}
              placeholder='✏️ type your day here'
              required
              onChange={handleData}
            ></textarea>
          </div>

          <div className={classes.buttonContainer}>
            <button type='submit' onClick={handleSubmit}>
              ✏️record
            </button>
            <button
              type='button'
              onClick={() => {
                openHandler.updateOpenHandler(false, "", null);
              }}
            >
              ❌close
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default DiaryForm;
