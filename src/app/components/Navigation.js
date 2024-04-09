"use client";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={classes.wrapper}>
      <nav className={classes.navMobile}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link to="/" className={classes.navLink}>
              Home
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/shopAll" className={classes.navLink}>
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={classes.navDesktop}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link to="/shopAll" className={classes.navLink}>
              Shop
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/skills" className={classes.navLink}>
              Skills
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/stories" className={classes.navLink}>
              Stories
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/about" className={classes.navLink}>
              About
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/contact" className={classes.navLink}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
