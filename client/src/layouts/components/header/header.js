import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Media from "react-media";
import { Link, useLocation } from "@reach/router";
import useWindowResize from "../../../hooks/use-window-resize/use-window-resize";
import {
  largeOrNarrower,
  xLargeOrWider,
} from "../../../constants/media-queries";
import { ReactComponent as MenuBar } from "../../../images/menuBar.svg";
import { ReactComponent as CloseMenu } from "../../../images/closeMenu.svg";
import { ReactComponent as Logo } from "../../../images/logo.svg";
import { ReactComponent as Bag } from "../../../images/bag.svg";
import { useSelector } from "react-redux";
import { bagItemsSelector } from "../../../state/selectors";

import styles from "./header.module.scss";

const menuItems = [
  {
    item: "HOME",
    link: "",
  },
  {
    item: "MENU",
    link: "menu",
  },
  {
    item: "ABOUT_US",
    link: "about-us",
  },
  {
    item: "CONTACT_US",
    section: "contact-us",
    link: "contact-us",
  },
];

export default function Header() {
  const { width } = useWindowResize();
  const { t } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActiveInput, setActiveInput] = useState(false);
  const bagItems = useSelector((store) => bagItemsSelector(store));

  const handleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      enableScroll();
    } else {
      setMenuOpen(true);
      disableScroll();
    }
  };

  const disableScroll = () => {
    if (width < 1024) {
    }
  };
  const enableScroll = () => {
    if (width < 1024) {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div
      className={`${styles.header} ${
        location.pathname !== "/" ? styles.yellow : ""
      }`}
    >
      <Link className={styles.logo} to={"/"}>
        <Logo />
      </Link>
      <Media query={largeOrNarrower}>
        <div className={styles.call}>
          <p className={styles.text}> Call to order</p>
          <p className={styles.number}>+374 96 23 23 29</p>
        </div>
      </Media>
      <div className={styles.menuItems}>
        <Media query={largeOrNarrower}>
          <>
            {menuOpen ? (
              <div className={styles.mobileMenu}>
                <div className={styles.closeMenu}>
                  <div onClick={handleMenu}>
                    <CloseMenu />
                  </div>
                </div>
                <div className={styles.mobileMenu}>
                  <div
                    className={`${styles.mobileMenuItems} ${
                      menuOpen ? styles.blur : ""
                    }`}
                  >
                    {menuItems.map((menuItem, key) => {
                      return (
                        <div
                          className={styles.menuItem}
                          data-menuanchor={menuItem.section}
                          key={key}
                          onClick={() => {
                            setMenuOpen(false);
                          }}
                        >
                          <Link
                            to={`/${menuItem.link}`}
                            className={styles.mobileMenuItem}
                          >
                            {t(menuItem.item)}
                          </Link>
                          {menuItem.submenuOptions && (
                            <div className={styles.submenuMobile}>
                              {menuItem.submenuOptions.map((submenu, index) => (
                                <Link
                                  key={index}
                                  className={styles.submenuItem}
                                  to={"/" + submenu.section}
                                >
                                  {t(submenu.item)}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}
            <div className={styles.openMenu}>
              <div onClick={handleMenu}>
                <MenuBar />
              </div>
            </div>
          </>
        </Media>
        <Media query={xLargeOrWider}>
          <React.Fragment>
            {!isActiveInput &&
              menuItems.map((menuItem, key) => {
                return (
                  <Link
                    to={`/${menuItem.link}`}
                    className={`${styles.menuItem} ${
                      location.pathname === `/${menuItem.link}` ||
                      location.pathname === `/${menuItem.link}/`
                        ? styles.active
                        : ""
                    }`}
                    data-menuanchor={menuItem.section}
                    key={key}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    {t(menuItem.item)}
                  </Link>
                );
              })}
          </React.Fragment>
        </Media>
      </div>

      <Media query={xLargeOrWider}>
        <div className={styles.lastBlock}>
          <Link to={"/shopping-bag"}>
            <div className={styles.bag}>
              <Bag />
              {!!bagItems.length && (
                <div className={styles.count}>{bagItems.length}</div>
              )}
            </div>
          </Link>

          <div className={styles.call}>
            <p className={styles.text}> Call to order</p>
            <p className={styles.number}>+374 96 23 23 29</p>
          </div>
        </div>
      </Media>
    </div>
  );
}
