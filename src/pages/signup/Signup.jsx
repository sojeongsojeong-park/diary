import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Signup.module.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { error, isPending, signup } = useSignup();

  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    } else if (event.target.type === "text") {
      setDisplayName(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form className={styles.signup_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend> Signup </legend>
        <label htmlFor='myNickname'> Nickname : </label>
        <input
          type='text'
          id='myNickname'
          value={displayName}
          onChange={handleData}
          required
        />
        <label htmlFor='myEmail'> Email : </label>
        <input
          type='email'
          id='myEmail'
          value={email}
          onChange={handleData}
          required
        />
        <label htmlFor='myPassword'> Password : </label>
        <input
          type='password'
          id='myPassword'
          value={password}
          onChange={handleData}
          required
        />
        <button type='submit' className={styles.button}>
          Signup
        </button>
      </fieldset>
    </form>
  );
}

export default Signup;
