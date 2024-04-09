import React, { useState, useEffect } from "react";
import CustomizationBar from "@/app/components/CustomizationBar";
import FilterSection from "./FilterSection";
import ProductSection from "./ProductSection";
import classes from "./ShopAll.module.css";

const ShopAll = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFilterHidden, setIsFilterHidden] = useState(false); // Define isFilterHidden state
  const [items, setItem] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        console.log(jsonData.length);
        setData(jsonData);
        setItem(jsonData.length);
        setLoading(false);
      } catch {
        console.error("Error Fetching data:");
      }
    };
    fetchData();
    return () => {
      //Perform cleanup if required
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const toggleFilterVisibility = () => {
    // Handler to toggle filter visibility
    setIsFilterHidden(!isFilterHidden);
  };

  return (
    <div>
      <div className={classes.headSection}>
        <h1 className={classes.heading}>Discover our Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          <br></br>
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <CustomizationBar
        count={items}
        isFilterHidden={isFilterHidden} // Pass isFilterHidden state as prop
        toggleFilterVisibility={toggleFilterVisibility} // Pass handler as prop
      />

      <div className={classes.mainSection}>
        {!isFilterHidden && (
          // Content to render when isFilterHidden is true
          <div className={classes.filterSection}>
            <FilterSection />
          </div>
        )}

        <div
          className={`${classes.productSection} ${
            isFilterHidden ? classes.fullWidth : ""
          }`}
        >
          <ProductSection products={data} />
        </div>
      </div>
    </div>
  );
};

export default ShopAll;
