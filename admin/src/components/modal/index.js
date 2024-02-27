"use client";
import styles from "./modal.module.scss";

function Modal({ children, close }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <button className={styles.close} onClick={close}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
