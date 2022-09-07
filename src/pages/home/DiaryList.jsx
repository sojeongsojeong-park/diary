import React from "react";
import styles from "./Home.module.css";

function DiaryList({ diaries }) {
  return (
    <>
      {diaries.map((item) => {
        return (
          <li key={item.id}>
            <strong className={styles.title}>{item.title}</strong>
            <p className={styles.text}>{item.content}</p>
          </li>
        );
      })}
    </>
  );
}

export default DiaryList;