import React from "react";
import classes from "./Footer.module.css";
import FooterTop from "@/app/components/FooterTop.js";
import FooterBottom from "@/app/components/FooterBottom";
const Footer = () => {
  return (
    <div className={classes.mainWrapper}>
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;
