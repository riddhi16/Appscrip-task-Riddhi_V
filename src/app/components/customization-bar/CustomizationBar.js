import React, { useState } from "react";
import classes from "./CustomizationBar.module.css";
import DropDownbox from "@/app/components/customization-bar/DropDownbox.js";
import Image from "next/image";

const CustomizationBar = ({
  count,
  isFilterHidden,
  toggleFilterVisibility,
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.product_count}>
        <p>{count} Items</p>
      </div>
      <div className={classes.filterAreaDesktop}>
        {isFilterHidden ? (
          <Image
            src="/arrow-r.svg" // Change the source for hidden state
            width={16}
            height={16}
            alt="Arrow"
          />
        ) : (
          <Image
            src="/arrow-l.svg" // Change the source for visible state
            width={16}
            height={16}
            alt="Arrow"
          />
        )}
        <p onClick={toggleFilterVisibility}>
          {isFilterHidden ? "Show Filter" : "Hide Filter"}
        </p>
      </div>
      <div className={classes.filterAreaMobile}>
        <p>Filter</p>
      </div>
      <div className={classes.recomendationArea}>
        <DropDownbox />
      </div>
    </div>
  );
};

export default CustomizationBar;
