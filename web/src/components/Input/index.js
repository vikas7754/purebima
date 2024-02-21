"use client";
import { useRef, useState } from "react";
import styles from "./input.module.scss";

function Input({ type, placeholder, onChange, label, id }) {
  const inputRef = useRef(null);

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    onChange(e.target.value);
    setValue(e.target.value);
    setError("");
  };

  const handleBlur = () => {
    if (value === "") return setError("This field is required.");
    if (!inputRef.current.checkValidity())
      return setError("Please enter a valid email.");
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id}>
        {label} <span>*</span>
      </label>
      <input
        ref={inputRef}
        className={`${styles.input} ${error && styles.error}`}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
