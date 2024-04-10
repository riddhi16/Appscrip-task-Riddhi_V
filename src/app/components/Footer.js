import React from "react";
import classes from "./Footer.module.css";
import FooterTop from "@/app/components/FooterTop.js";
import FooterBottom from "@/app/components/FooterBottom";
const Footer = () => {
  return (
    <div className={classes.wrap}>
      <div className={classes.mainWrapper}>
        <FooterTop />
        <FooterBottom />
        <div className={classes.rightsBlock}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
