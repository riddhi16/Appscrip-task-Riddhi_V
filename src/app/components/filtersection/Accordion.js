import React, { useState } from "react";
import classes from "./FilterSection.module.css";
import Image from "next/image";

const Accordion = ({ heading, options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionChange = (optionValue) => {
    //
    if (selectedOptions.includes(optionValue)) {
      setSelectedOptions(
        selectedOptions.filter((value) => value !== optionValue)
      );
    } else {
      setSelectedOptions([...selectedOptions, optionValue]);
    }
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const unselectAll = () => {
    setSelectedOptions([]);
  };

  return (
    <div className={classes.accordionWrapper}>
      <div className={classes.accordionHead}>
        <h3 onClick={toggleAccordion}>{heading}</h3>
        {isOpen ? (
          <Image
            onClick={toggleAccordion}
            src="/arrow-d.svg" // Change the source for hidden state
            width={20}
            height={20}
            alt="SaveBtn"
          />
        ) : (
          <Image
            onClick={toggleAccordion}
            src="/arrow-left.svg" // Change the source for hidden state
            width={20}
            height={20}
            alt="SaveBtn"
          />
        )}
      </div>
      <p>All</p>
      {/* <p>
     
        {selectedOptions.length > 0 ? (
          <p>{selectedOptions.join(", ")}</p>
        ) : (
          <p>All</p>
        )}
      </p> */}
      {isOpen && (
        <>
          <p className={classes.unselectList} onClick={unselectAll}>
            {" "}
            Unselect all
          </p>
          {options.map((option) => (
            <div className={classes.options} key={option.value}>
              <input
                type="checkbox"
                id={option.value}
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleOptionChange(option.value)}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Accordion;
