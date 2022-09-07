import React, { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

function DiaryForm({ uid }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
    } else if (e.target.id === "content") {
      setContent(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ uid, title, content });
  };

  return (
    <>
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
          <label htmlFor='content'>How was your day? : </label>
          <textarea
            id='content'
            type='text'
            value={content}
            required
            onChange={handleData}
          ></textarea>

          <button type='submit'>✏️record</button>
        </fieldset>
      </form>
    </>
  );
}

export default DiaryForm;
