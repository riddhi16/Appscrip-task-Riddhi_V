// import React from "react";
import React, { useState } from "react";
import Image from "next/image";
import classes from "./CustomizationBar.module.css";
const DropDown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };
  return (
    <select
      className={classes.select}
      value={selectedOption}
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option
        className={classes.selectedOption}
        value={selectedOption ? "" : selectedOption}
      >
        {selectedOption ? selectedOption : "Recommneded"}
      </option>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className={classes.option}
        >
          {/* <span>
            {selectedOption === option.value ? (
              <Image
                src="/arrow-r.svg" // 
                width={20}
                height={20}
                alt="SaveBtn"
                // className={classes.heart}
              ></Image>
            ) : null}
          </span> */}
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
