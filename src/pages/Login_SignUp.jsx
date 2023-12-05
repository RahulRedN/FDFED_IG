import { Link, useNavigate } from "react-router-dom";
import styles from "./css/Login_SignUp.module.css";
import { useEffect, useState } from "react";

import SignInForm from "../components/Login/SignInForm";
import SignUpForm from "../components/Login/SignUpForm";
import { useAuth } from "../Firebase/AuthContexts";

const Login_SignUp = () => {
  const nav = useNavigate();
  const { user, signIn } = useAuth();
  const [isSignUp, setSignUp] = useState(false);

  useEffect(() => {
    if (user) {
      nav("/jobseeker");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div
      className={`${styles.fContainer} ${
        isSignUp ? styles["sign-up-mode"] : " "
      }`}
    >
      <Link to="/">
        <span className={styles.pageCloseBtn}>x</span>
      </Link>
      <div className={styles["forms-container"]}>
        <div className={styles["signIn-singUp"]}>
          <SignInForm signIn={signIn} />
          <SignUpForm />
        </div>
      </div>

      <div className={styles["panels-container"]}>
        <div className={`${styles.panel} ${styles["left-panel"]}`}>
          <div className={styles.content}>
            <h3>New here ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              beatae quas magnam!
            </p>
            <button
              className={`${styles.iBtn} ${styles.transparent}}`}
              onClick={() => setSignUp(true)}
            >
              Sign Up
            </button>
          </div>
          <img src={"/assets/left_panel.svg"} alt="" className={styles.pImg} />
        </div>

        <div className={`${styles.panel} ${styles["right-panel"]}`}>
          <img src={"/assets/right_panel.svg"} alt="" className={styles.pImg} />
          <div className={styles.content}>
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              beatae quas magnam!
            </p>
            <button
              className={`${styles.iBtn} ${styles.transparent}}`}
              onClick={() => setSignUp(false)}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_SignUp;
