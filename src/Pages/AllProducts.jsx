import React from 'react';
import style from "./Styles/AllProducts.module.css";
import { getAllCategories, getAllProducts, getCategoryWiseProducts, getSingleProduct } from '../api/productsApi';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setCategoryProducts, setProducts, setSingleProduct } from '../features/products/productsSlice';
import { useNavigate } from 'react-router-dom';






function AllProducts() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { products } = useSelector((state) => state.products);
  return (
    <div className={style.allProductSection}>
      <div className="container-fluid">
        <h2 className='fw-bold text-center mb-5'>All Products</h2>
        <div className="row">
          {products.map((item) => (
            <div
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 mb-4 "
              key={item.id}
            >
              <div className={`card ${style.cartCard}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={`card-img-top mb-2 ${style.productImage}`}
                />
                <div className="card-body">
                  <h5 className={`card-title ${style.productName}`}>
                    {item.title}
                  </h5>
                  <p className={`card-text ${style.productDescription}`}>
                    {item.description}
                  </p>
                  <p className={style.productPrice}> Price : ₹{item.price}</p>
                  <div className={style.buttonGroup}>
                    <button className={`btn  ${style.addToCartBtn}`}>
                      Add to Cart
                    </button>
                    <button className={`btn ${style.viewBtn}`} onClick={() => navigate(`/product-details/${item.id}`)}>
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProducts
