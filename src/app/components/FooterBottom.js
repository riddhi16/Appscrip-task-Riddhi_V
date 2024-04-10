import React from "react";
import classes from "./Footer.module.css";

const FooterBottom = () => {
  return (
    <div className={classes.bottomWrapper}>
      <div className={classes.bottomLeft}>
        <div className={classes.mettaMuseMobile}>
          <ul className={classes.MettList}>
            <li className={classes.list}>+44 221 133 5360</li>
            <li className={classes.list}>customercare@mettamuse.com</li>
          </ul>
        </div>
        <div className={classes.quickLinks}></div>
      </div>
      <div className={classes.bottomRight}></div>
    </div>
  );
};

export default FooterBottom;
