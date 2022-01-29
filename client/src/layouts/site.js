import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import useScrollTop from "../hooks/use-scroll-top/use-scroll-top";
import styles from "./site.module.scss";

export default function Site({ isLoading, children }) {
  useScrollTop();
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      {/*<Footer/>*/}
    </>
  );
}

Site.propTypes = {
  children: PropTypes.node.isRequired,
};
