import React from "react";
import classes from "./Footer.module.css";
import Image from "next/image";

const FooterBottom = () => {
  return (
    <div className={classes.bottomWrapper}>
      <div className={classes.bottomLeft}>
        <div className={classes.mettaMuseMobile}>
          <ul className={classes.MettList}>
            <li className={classes.list}>mettā muse</li>
            <li className={classes.list}>
              <Image
                src="/arrow-right-white.svg"
                width={20}
                height={20}
                alt="down-arrow"
                className={classes.icons}
              />
            </li>
          </ul>
        </div>
        <div className={classes.quickLinksMobile}>
          <ul className={classes.quickLinksList}>
            <li className={classes.list}>quickLinks</li>
            <li className={classes.list}>
              <Image
                src="/arrow-right-white.svg"
                width={20}
                height={20}
                alt="down-arrow"
                className={classes.icons}
              />
            </li>
          </ul>
        </div>
        <div className={classes.mettaMuseDesktop}>
          <ul className={classes.MettList}>
            <li className={`${classes.list} ${classes.listHead}`}>
              <a href="#">mettā muse</a>
            </li>
            <li className={classes.list}>
              <a href="#">About Us</a>
            </li>
            <li className={classes.list}>
              <a href="#">Stories</a>
            </li>
            <li className={classes.list}>
              <a href="#">Artisans</a>
            </li>
            <li className={classes.list}>
              <a href="#">Boutiques</a>
            </li>
            <li className={classes.list}>
              <a href="#">EU Compliances Docs</a>
            </li>
          </ul>
        </div>
        <div className={classes.quickLinksDesktop}>
          <ul className={classes.quickLinksList}>
            <li className={`${classes.list} ${classes.listHead}`}>
              <a href="#">Quick Links</a>
            </li>
            <li className={classes.list}>
              <a href="#">Orders & Shipping</a>
            </li>
            <li className={classes.list}>
              <a href="#">Join/Login as a Seller</a>
            </li>
            <li className={classes.list}>
              <a href="#">Payment & Pricing</a>
            </li>
            <li className={classes.list}>
              <a href="#">Return & Refunds</a>
            </li>
            <li className={classes.list}>
              <a href="#">FAQs</a>
            </li>
            <li className={classes.list}>
              <a href="#">Privacy Policy</a>
            </li>
            <li className={classes.list}>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.bottomRight}>
        <div className={classes.followUsMobile}>
          <ul className={classes.followUsList}>
            <li className={classes.list}>Follow Us</li>
            <li className={classes.list}>
              <Image
                src="/arrow-right-white.svg"
                width={20}
                height={20}
                alt="down-arrow"
                className={classes.icons}
              />
            </li>
          </ul>
        </div>
        <div className={classes.followUsDesktop}>
          <ul className={classes.followUsList}>
            <li className={classes.list}>
              <a href="#" className={classes.link}>
                Follow Us
              </a>
            </li>
            <li className={`${classes.list} ${classes.socialIcons}`}>
              <a href="#" className={classes.link}>
                <Image
                  src="/a.svg"
                  width={25}
                  height={25}
                  alt="lIn"
                  className={classes.icons}
                />
              </a>
              <a href="#" className={classes.link}>
                <Image
                  src="/insta.svg"
                  width={25}
                  height={25}
                  alt="insta"
                  className={classes.icons}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.paymentOptions}>
          <p>mettā muse Accepts</p>
          <div className={classes.paymentOptionsIcons}>
            <Image
              src="/pay_1.svg"
              width={51}
              height={30}
              alt="paymentIcon"
              className={classes.icons}
            />
            <Image
              src="/pay_2.svg"
              width={51}
              height={30}
              alt="paymentIcon"
              className={classes.icons}
            />
            <Image
              src="/pay_3.svg"
              width={51}
              height={30}
              alt="paymentIcon"
              className={classes.icons}
            />
            <Image
              src="/pay_4.svg"
              width={51}
              height={30}
              alt="paymentIcon"
              className={classes.icons}
            />
            <Image
              src="/pay_5.svg"
              width={51}
              height={30}
              alt="paymentIcon"
              className={classes.icons}
            />
            <Image
              src="/pay_6.svg"
              width={51}
              height={30}
              alt="paymentIcon"
              className={classes.icons}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
