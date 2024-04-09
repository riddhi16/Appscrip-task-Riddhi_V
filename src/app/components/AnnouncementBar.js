import React from "react";
import classes from "@/app/components/AnnouncemnetBar.module.css";
import Image from "next/image";

const AnnoucumentBar = () => {
  return (
    <div className={classes.Annoucement_Bar}>
      <div className={classes.A_childO}>
        <Image
          src="/element-4.svg"
          width={20}
          height={20}
          alt="annoucenet img"
        />
        <p className={classes.Annoucement_Text}>Lorem ipsum dolor</p>
      </div>
      <div className={classes.A_childT}>
        <Image
          src="/element-4.svg"
          width={20}
          height={20}
          alt="annoucenet img"
        />
        <p className={classes.Annoucement_Text}>Lorem ipsum dolor</p>
      </div>
      <div className={classes.A_childTh}>
        <Image
          src="/element-4.svg"
          width={20}
          height={20}
          alt="annoucenet img"
        />
        <p className={classes.Annoucement_Text}>Lorem ipsum dolor</p>
      </div>
    </div>
  );
};

export default AnnoucumentBar;
