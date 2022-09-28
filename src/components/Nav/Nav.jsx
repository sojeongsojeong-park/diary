import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import styles from "./Nav.module.css";

function Nav() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <div className={styles.nav}>
      <h1 className={styles.title}>Secret Diary</h1>
      <ul className={styles.list_nav}>
        {!user && (
          <>
            <li>
              <Link to='/login'>login</Link>
            </li>
            <li>
              <Link to='/signup'>signup</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            <strong>Welcome {user.displayName}!</strong>
            <button type='button' onClick={logout}>
              logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Nav;
