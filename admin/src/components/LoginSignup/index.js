"use client";
import { useState } from "react";
import Login from "./Login";
import styles from "./style.module.scss";
import Signup from "./Signup";

function LoginPage() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={styles.container} style={{ minHeight: "90vh" }}>
      <div className={styles.wrapper}>
        <div className={styles.leftPanel}>
          <div>
            <div className={styles.title}>
              <h2>{toggle ? "Login Here" : "Signup Here"}</h2>
            </div>
            <div className={styles.middle}>
              <div>
                <img src="/images/pb-app.png" alt="logo" height="180px" />
              </div>
            </div>
            <div className={styles.account_check}>
              <p>
                {toggle ? "Don't have an account?" : "Already have an account?"}
              </p>
              <button onClick={() => setToggle(!toggle)}>
                {toggle ? "Signup Here" : "Login Here"}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.form_container}>
          {toggle ? <Login /> : <Signup />}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
