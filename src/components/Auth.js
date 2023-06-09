import { useRef } from "react";
import classes from "./Auth.module.css";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const emailInputHandler = useRef();
  const passInputHandler = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const emailInput = emailInputHandler.current.value;
    const passInput = passInputHandler.current.value;
    const passIsValid = passInput !== "";
    const emailIsValid = emailInput !== "";
    const validForm = emailIsValid && passIsValid
    if (!validForm) {
      return;
    }
    console.log(validForm);
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInputHandler} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passInputHandler} />
          </div>
          <button onClick={submitHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
