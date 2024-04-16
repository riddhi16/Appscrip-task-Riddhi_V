import React from "react";
import classes from "./FilterSection.module.css";
import Accordion from "./Accordion";
const FilterSection = () => {
  const Idealfor_Options = [
    { label: "Men", value: "Men" },
    { label: "Women", value: "Women" },
    { label: "Baby & Kids", value: "Babt & Kids" },
  ];

  const obj2 = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
  ];
  return (
    <div className={classes.wrapper}>
      <div className={classes.checkbox}>
        <input type="checkbox" value="customize"></input>
        <label for="customize">Customizble</label>
      </div>
      <Accordion heading="Ideal For" options={Idealfor_Options} />
      <Accordion heading="Occasion" options={obj2} />
      <Accordion heading="Fabric" options={obj2} />
      <Accordion heading="Work" options={obj2} />
      <Accordion heading="Segment" options={obj2} />
      <Accordion heading="Suitable For" options={obj2} />
      <Accordion heading="Raw Materials" options={obj2} />
      <Accordion heading="Pattern" options={obj2} />
    </div>
  );
};

export default FilterSection;
