import React from "react";
import classes from "./ShopAll.module.css";
import Image from "next/image";
const ProductCard = ({ product }) => {
  return (
    <div className={classes.productCard}>
      <div className={classes.productImage}>
        <Image
          src={product.image}
          alt={product.title}
          width={150}
          height={150}
        />
      </div>
      <div className={classes.productContentWrapper}>
        <div className={classes.productTitleArea}>
          <h3 className={classes.productTitle}>{product.title}</h3>
          <Image
            src="/heart.svg"
            width={20}
            height={20}
            alt="SaveBtn"
            className={classes.heart}
          />
        </div>
        <div className={classes.productDetails}>
          <p className={classes.productDescription}>{product.description}</p>
          {/* <p className={classes.productPrice}>$ : {product.price}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
