import React, { useState } from "react";
import Button from "../Button/Button";

import classes from "./Login.module.css";

interface Props {
  onLogin: (email: string, password: string) => void;
}

function Login({ onLogin }: Props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState<boolean>();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event: any) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event: any) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    onLogin(enteredEmail, enteredPassword);
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${classes.control} ${
          emailIsValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
      </div>
      <div
        className={`${classes.control} ${
          passwordIsValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
      </div>
      <div className={classes.actions}>
        <Button
          classes={[classes.btn]}
          type="submit"
          onClick={submitHandler}
          disabled={!formIsValid}
        >
          Login
        </Button>
        {
          <Button
            classes={[classes.btn, "btn-danger", "ml-2"]}
            type="submit"
            onClick={submitHandler}
            disabled={!formIsValid}
          >
            Logout
          </Button>
        }
      </div>
    </form>
  );
}

export default Login;
