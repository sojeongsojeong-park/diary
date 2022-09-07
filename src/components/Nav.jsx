import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import styles from "./Nav.module.css";

function Nav() {
  const { logout } = useLogout();
  return (
    <div className={styles.nav}>
      <h1 className={styles.title}>Secret Diary</h1>
      <ul className={styles.list_nav}>
        <li>
          <Link to='/login'>login</Link>
        </li>
        <li>
          <Link to='/signup'>signup</Link>
        </li>
        <li>
          <button type='button' onClick={logout}>
            logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
