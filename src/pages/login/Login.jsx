import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, login } = useLogin();

  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <form className={styles.login_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend> Login </legend>
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
        {!isPending && (
          <button type='submit' className={styles.button}>
            Login
          </button>
        )}
        {isPending && <strong>Now Processing...</strong>}
        {error && <strong>{error}</strong>}
      </fieldset>
    </form>
  );
}

export default Login;
