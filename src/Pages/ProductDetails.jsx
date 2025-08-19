import React, { useState } from "react";
import style from "./Styles/ProductDetails.module.css";

function ProductDetails() {
  // Dummy Products Data
  const products = [
    {
      id: 1,
      name: "Apple iPhone 14 (128 GB) - Midnight",
      price: 69999,
      originalPrice: 79999,
      discount: "12% off",
      rating: 4.5,
      reviews: 2345,
      description:
        "The iPhone 14 comes with a stunning design, powerful A15 Bionic chip, and an advanced dual-camera system. Experience next-level performance and battery life.",
      image: "https://via.placeholder.com/350x400.png?text=iPhone+14",
    },
    
  ];

  // By default first product show
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section style={{marginTop:"100px"}}>

    
    <div className="container my-5">
      <div className={style.viewCartSection}>

 
      <div className="row rounded ">
        {/* Left Section - Product Image */}
        <div className="col-md-5 d-flex justify-content-center p-4">
          <div className={style.imageBox}>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className={style.productImg}
            />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="col-md-7 p-4">
          <h3 className={style.productTitle}>{selectedProduct.name}</h3>

          {/* Rating + Reviews */}
          <div className={style.ratingBox}>
            <span className={style.rating}>{selectedProduct.rating} ★</span>
            <span className={style.reviews}>
              {selectedProduct.reviews} Ratings & Reviews
            </span>
          </div>

          {/* Price Section */}
          <div className={style.priceSection}>
            <span className={style.price}>₹{selectedProduct.price}</span>
            <span className={style.originalPrice}>
              ₹{selectedProduct.originalPrice}
            </span>
            <span className={style.discount}>{selectedProduct.discount}</span>
          </div>

          {/* Description */}
          <p className={style.description}>{selectedProduct.description}</p>

          {/* Buttons */}
          <div className={style.btnGroup}>
            <button className={style.addToCartBtn}>ADD TO CART</button>
            <button className={style.buyNowBtn}>BUY NOW</button>
          </div>
        </div>
      </div>
        </div>
    </div>
</section>
  );
}

export default ProductDetails;
