import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import styles from "./button.module.scss";

export default function Button({
  type,
  onClick,
  to,
  isSubmit,
  small,
  full,
  noPadding,
  isNative,
  onMouseEnter,
  onMouseLeave,
  className,
  children,
  style,
  disable,
}) {
  let styleName;
  switch (type) {
    case "primary":
      styleName = styles.primary;
      break;
    case "secondary":
      styleName = styles.secondary;
      break;
    case "white":
      styleName = styles.white;
      break;
    case "blank":
      styleName = styles.blank;
      break;
    default:
      styleName = styles.primary;
      break;
  }

  return (
    <>
      {isNative ? (
        <a
          href={to}
          target={"_blank"}
          onClick={onClick}
          rel="noreferrer"
          className={`
		    		    ${styleName} ${small ? styles.small : ""}
		    		    ${full ? styles.full : ""}
		    		    ${noPadding ? styles.noPadding : ""}
                        ${className ? className : ""}
                        ${disable ? styles.disable : ""}
                    `}
        >
          {children}
        </a>
      ) : (
        <>
          {to ? (
            <Link
              to={to}
              onClick={onClick}
              className={`
                            ${styleName}
                            ${styles.link}
                            ${noPadding ? styles.noPadding : ""}
                            ${full ? styles.full : ""}
                            ${className ? className : ""}
                                  ${disable ? styles.disable : ""}
                        `}
            >
              {children}
            </Link>
          ) : (
            <button
              type={isSubmit ? "submit" : "button"}
              onClick={onClick}
              className={`
		    			         ${styleName} ${small ? styles.small : ""}
		    			         ${full ? styles.full : ""}
		    			         ${noPadding ? styles.noPadding : ""}
                                 ${className ? className : ""}
                             `}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              style={style}
              disabled={disable}
            >
              {children}
            </button>
          )}
        </>
      )}
    </>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  isSubmit: PropTypes.bool,
  small: PropTypes.bool,
  full: PropTypes.bool,
  noPadding: PropTypes.bool,
  isNative: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  disable: PropTypes.bool,
};
Button.defaultProps = {
  type: "primary",
  to: "",
  small: false,
  full: false,
  noPadding: false,
  isNative: false,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  isSubmit: false,
  disable: false,
  className: "",
  style: {},
};
