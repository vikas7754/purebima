"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./input.module.scss";

const types = {
  email: "email",
  text: "text",
  tel: "mobile number",
  date: "date",
};

function Input({ type, placeholder, onChange, label, id, value, ...rest }) {
  const inputRef = useRef(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    onChange(e.target.value);
    setInputValue(e.target.value);
    setError("");
  };

  const handleBlur = () => {
    if (inputValue === "") return setError("This field is required.");
    if (!inputRef.current.checkValidity())
      return setError(`Please enter a valid ${types[type] || "input"}.`);
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
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        {...rest}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
