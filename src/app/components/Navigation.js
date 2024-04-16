"use client";
import React from "react";
import classes from "./Navigation.module.css";
import Link from "next/link";
const Navigation = () => {
  return (
    <div className={classes.wrapper}>
      <nav className={classes.navMobile}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link href="/" className={classes.navLink}>
              Home
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link href="/shop-all" className={classes.navLink}>
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={classes.navDesktop}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link href="/shop-all" className={classes.navLink}>
              Shop
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link href="/skills" className={classes.navLink}>
              Skills
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link href="/stories" className={classes.navLink}>
              Stories
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link href="/about" className={classes.navLink}>
              About
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link href="/contact-us" className={classes.navLink}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
