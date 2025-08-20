import React, { useEffect, useState } from "react";
import style from "./Styles/ProductDetails.module.css";
import { useParams } from "react-router-dom";
import { setSingleProduct } from "../features/products/productsSlice";
import { getSingleProduct } from "../api/productsApi";
import { useDispatch, useSelector } from "react-redux";

function ProductDetails() {

  const param = useParams()

  const dispatch = useDispatch()
  const { singleProduct } = useSelector((state) => state.products);

  useEffect(() => {
    async function fetchData() {
      const single = await getSingleProduct(param.id);
      dispatch(setSingleProduct(single));
    }
    fetchData();
  }, [dispatch]);
 
console.log(singleProduct, ":singleProduct")
  return (
    <section style={{ marginTop: "100px" }}>


      <div className="container my-5">
        <div className={style.viewCartSection}>


          <div className="row rounded ">
            <div className="col-md-5 d-flex justify-content-center p-4">
              <div className={style.imageBox}>
                <img
                  src={singleProduct.image}
                  alt={singleProduct.title}
                  className={style.productImg}
                />
              </div>
            </div>

            <div className="col-md-7 p-4">
              <h3 className={style.productTitle}>{singleProduct.title}</h3>

              <div className={style.ratingBox}>
                <span className={style.rating}>{singleProduct.rating.rate} ★</span>
                <span className={style.reviews}>
                  {singleProduct.reviews} Ratings & Reviews
                </span>
              </div>

              <div className={style.priceSection}>
                <span className={style.price}>₹{singleProduct.price}</span>
              </div>
              <h5><b>{singleProduct.category}</b></h5>

              <p className={style.description}>{singleProduct.description}</p>

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
