import React from "react";
import Image from "next/image";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      {/* 1st block */}
      <div className={classes.left_block}>
        <Image
          src="/hamburger.svg"
          width={20}
          height={20}
          alt="hamburger_icon"
          className={classes.hamburger}
        />
        <Image
          src="/vector.svg"
          width={20}
          height={20}
          alt="vector_icon"
          className={classes.vector}
        />
      </div>
      {/* Logo block */}
      <div className={classes.middle_block}>
        <h1>LOGO</h1>
      </div>
      {/* 3rd block */}
      <div className={classes.right_block}>
        <Image
          src="/search-normal.svg"
          width={20}
          height={20}
          alt="search_icon"
        />

        <Image src="/heart.svg" width={20} height={20} alt="heart_icon" />

        <Image
          src="/shopping-bag.svg"
          width={20}
          height={20}
          alt="shopping_icon"
        />

        <Image
          src="/profile.svg"
          width={20}
          height={20}
          alt="profile_icon"
          className={classes.profile}
        />

        <div className={classes.languageWrapper}>
          <p className={classes.language}>
            ENG
            {/* <span style={{ margin: "2px 0px 0px 0px" }}>
           
          </span> */}
          </p>
          <Image
            src="/arrow-left.svg"
            width={15}
            height={15}
            alt="language_icon"
            className={classes.arrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
