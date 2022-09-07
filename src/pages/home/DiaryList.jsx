import React from "react";
import { useFirestore } from "../../hooks/useFirestore";
import styles from "./Home.module.css";

function DiaryList({ diaries }) {
  const { deleteDocument } = useFirestore("diary");
  return (
    <>
      {diaries.map((item) => {
        return (
          <li key={item.id}>
            <strong className={styles.title}>{item.title}</strong>
            <p className={styles.text}>{item.content}</p>
            <button
              type='button'
              onClick={() => {
                deleteDocument(item.id);
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </>
  );
}

export default DiaryList;
