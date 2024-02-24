"use client";

import useUser from "@/redux/hooks/useUser";
import Applications from "./Applications";
import Charts from "./Charts";
import Users from "./Users";
import styles from "./home.module.scss";
import LoginPage from "@/components/LoginSignup";

function HomePage() {
  const { isLoggedIn } = useUser();
  return (
    <>
      {isLoggedIn ? (
        <div>
          <Charts />
          <div className={styles.data}>
            <Applications />
            <Users />
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default HomePage;
