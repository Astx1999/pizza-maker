import React from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import styles from "./select.module.scss";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: "#434141",
    // backgroundColor: '#f8f8f8',
    backgroundColor: "#fff",
    cursor: "pointer",
    fontWeight: state.isSelected ? "bold" : "normal",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 600,
    fontFamily: "Roboto,Arial",
    fontSize: "16px",
    border: "1px solid #434141",
    borderTop: "none",
    marginTop: "0",
    cursor: "pointer",
    borderRadius: "0 0 5px 5px",
    // backgroundColor: '#f8f8f8',
    backgroundColor: "#fff",
  }),
  container: (provided) => ({
    ...provided,
    maxWidth: "280px",
    cursor: "pointer",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontFamily: "Roboto,Arial",
    fontWeight: "bold",
    color: "#434141",
    paddingLeft: "5px",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#434141",
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
  }),
  control: (provided, state) => ({
    ...provided,
    // backgroundColor: '#f8f8f8',
    backgroundColor: "#fff",
    textAlign: "center",
    border: "1px solid #434141",
    borderBottom: state.selectProps.menuIsOpen ? "none" : null,
    borderRadius: state.selectProps.menuIsOpen ? "5px 5px 0 0" : "5px",
    color: "#434141",
    cursor: "pointer",
    fontFamily: "Roboto,Arial",
    minHeight: "50px",
    // This line disables the blue border
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: "1px solid #434141",
      borderBottom: state.selectProps.menuIsOpen ? "none" : null,
      borderRadius: state.selectProps.menuIsOpen ? "5px 5px 0 0" : "5px",
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    opacity: state.isDisabled ? 0.5 : 1,
    transition: "opacity 300ms",
    fontFamily: "Roboto,Arial",
    fontWeight: "bold",
    color: "#434141",
    paddingLeft: "5px",
  }),
};

export default function CustomSelect({
  options,
  placeholder,
  onChange,
  error,
}) {
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <Select
        onChange={(value) => onChange(value)}
        components={{
          IndicatorSeparator: () => null,
        }}
        placeholder={placeholder}
        styles={customStyles}
        options={options}
        hideSelectedOptions={false}
        backspaceRemovesValue={false}
        isClearable={false}
        isSearchable={false}
        closeMenuOnSelect={true}
      />

      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
}
