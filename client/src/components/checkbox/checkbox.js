import React from "react";
import PropTypes from "prop-types";

import styles from "./checkbox.module.scss";

export default function Checkbox({
  disabled,
  name,
  label,
  checked,
  onChange,
  bold,
  hidden,
}) {
  let html = `${name} + ${Math.random()} `;

  return (
    <span className={styles.checkbox} onClick={onChange}>
      <input
        type="checkbox"
        name={name}
        id={html}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      {!hidden && <span className={styles.checkboxIndicator} />}
      <label className={`${bold && styles.checkboxLabel}`} htmlFor={html}>
        {label}
      </label>
    </span>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  onLabelClick: PropTypes.func,
  value: PropTypes.bool,
  bold: PropTypes.bool,
  hidden: PropTypes.bool,
};

Checkbox.defaultProps = {
  id: "",
  value: false,
  label: "",
  link: { text: "", url: "" },
  onLabelClick: () => {},
  bold: false,
  hidden: false,
};
