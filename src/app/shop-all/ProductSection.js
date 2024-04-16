import React from "react";
import ProductCard from "@/app/shop-all/ProductCard";
import classes from "./ShopAll.module.css";
const ProductSection = (props) => {
  const { products } = props;
  return (
    <div className={classes.productlist}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductSection;
