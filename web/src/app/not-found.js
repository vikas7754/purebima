"use client";
import styles from "@/styles/NotFound.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function error404() {
  const goBack = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") window.history.back();
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.main}>
        <div className={styles.container}>
          <h1>404</h1>
          <p>Sorry, Page Not Found!</p>
          <div className={styles.btn}>
            <Link href="/" className="btn-primary">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
            <button className="btn-secondary" onClick={goBack}>
              <FontAwesomeIcon icon={faBackward} /> Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default error404;
