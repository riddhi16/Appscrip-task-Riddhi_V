import React, { useState } from "react";
import DropDown from "@/app/components/DropDown.js";
const options = [
  { label: "Recommended", value: "recommended" },
  { label: "Newest first", value: "Newest first" },
  { label: "popular", value: "popular" },
  { label: "Price : high to low", value: "Price : high to low" },
  { label: "Price : low to high", value: "Price : low to high" },
];

const DropDownbox = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return <DropDown options={options} onSelect={handleSelect} />;
};

export default DropDownbox;
