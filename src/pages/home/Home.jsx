import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import DiaryForm from "./DiaryForm";
import styles from "./Home.module.css";

function Home() {
  const { user } = useAuthContext();

  return (
    <main className={styles.content}>
      <aside className={styles.side_menu}>
        <DiaryForm uid={user.uid}></DiaryForm>
      </aside>
      <ul className={styles.content_list}></ul>
    </main>
  );
}

export default Home;
