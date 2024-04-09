import React from "react";
import classes from "./Footer.module.css";
const FooterTop = () => {
  return (
    <div className={classes.topWrapper}>
      <div className={classes.topLeft}>
        <div className={classes.topLeft_textArea}>
          <h3>Be The First One To Know</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
        </div>
        <div className={classes.newsLetterArea}>
          <label htmlFor="name">
            <div className={classes}>
              <input
                type="text"
                className={classes}
                id="name"
                name="name"
                required
                placeholder="your email"
              ></input>
            </div>
          </label>
          <label htmlFor="subscribe">
            <div className={classes}>
              <button className={classes}>subscribe</button>
            </div>
          </label>
        </div>
      </div>
      <div className={classes.topRight}>
        <div className={classes.contactArea}>
          <h3 className={classes.contactHeading_Mobile}>Call Us</h3>
          <h3 className={classes.contactHeading_Desktop}>Contact Us</h3>
          <div className={classes.contactDetails}>
            <ul>
              <li>+44 221 133 5360</li>
              <li>customercare@mettamuse.com</li>
            </ul>
          </div>
        </div>
        <div className={classes.currenctDetails}>
          <ul>
            <li>+44 221 133 5360</li>
            <li>USD</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
