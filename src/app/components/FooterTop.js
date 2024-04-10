import React from "react";
import classes from "./Footer.module.css";
import Image from "next/image";
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
          <div className={classes.inputWrapper}>
            <label htmlFor="name">
              <input
                type="text"
                className={classes.inputBox}
                id="name"
                name="name"
                required
                placeholder="your email"
              ></input>
            </label>
          </div>

          <div className={classes.buttonWrapper}>
            <label htmlFor="subscribe">
              <button className={classes.buttonArea}>subscribe</button>
            </label>
          </div>
        </div>
      </div>
      <div className={classes.topRight}>
        <div className={classes.contactArea}>
          <h3 className={classes.contactHeading_Mobile}>Call Us</h3>
          <h3 className={classes.contactHeading_Desktop}>Contact Us</h3>
          <div className={classes.contactDetails}>
            <ul className={classes.contactUsList}>
              <li className={classes.list}>+44 221 133 5360</li>
              <li className={classes.list}>
                <Image
                  className={classes.starIcon}
                  src="/star.svg" // Change the source for hidden state
                  width={6}
                  height={6}
                  alt="SaveBtn"
                />
              </li>
              <li className={classes.list}>customercare@mettamuse.com</li>
            </ul>
          </div>
        </div>
        <div className={classes.currencyDetails}>
          <h3 className={classes.currencyHeading}>Currency</h3>
          <ul className={classes.currencyList}>
            <li className={classes.list}>
              <Image
                src="/usFlag.svg" // Change the source for hidden state
                width={20}
                height={20}
                alt="SaveBtn"
              />
            </li>
            <li className={classes.list}>
              <Image
                className={classes.starIcon}
                src="/star.svg" // Change the source for hidden state
                width={6}
                height={6}
                alt="SaveBtn"
              />
            </li>
            <li className={classes.list}>USD</li>
          </ul>
          <p className={classes.text}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
