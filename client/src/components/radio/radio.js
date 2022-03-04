import React from "react";
import styles from "./radio.module.scss";

const Radio = ({ onChange, checked, id, label, name }) => {
  return (
    <div className={styles.options}>
      <input
        className={styles.radio}
        onChange={onChange}
        checked={checked}
        type="radio"
        name={name}
        id={id}
      />
      <label className={styles.label} htmlFor={id}>
        <span className={styles.labelText}>{label}</span>
      </label>
    </div>
  );
};

export default Radio;
