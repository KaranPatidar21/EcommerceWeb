import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryWiseProducts } from '../api/productsApi';
import { setCategoryProducts } from '../features/products/productsSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import style from "./Home.module.css"
function Categories() {
  const dispatch = useDispatch()
  const { categoryProducts } = useSelector((state) => state.products);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const category = queryParams.get("category");
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchData() {
      const categoryProducts = await getCategoryWiseProducts(category);
      dispatch(setCategoryProducts(categoryProducts));
    }
    fetchData();
  }, [dispatch, category]);
  console.log(categoryProducts.products, ":categoryProducts")
  return (
    <div className='mt-5 pt-5 container-fluid'>

      <h1 className='text-center mb-4'>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div className="row">
        {categoryProducts.products.map((item) => (
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
                <h6 className={`card-title ${style.productName}`}>
                  {item.title}
                  {/* Mens Casual Premium */}
                </h6>
                <p className={`card-text ${style.productDescription}`}>
                  {item.description}
                  {/* Slim-fitting style, contrast raglan long sleeve, three-button henley p */}
                </p>
                <p className={style.productPrice}> Price : ₹{item.price}</p>
                <div className={style.buttonGroup}>
                  <button className={`btn  ${style.addToCartBtn}`}>
                    Add to Cart
                  </button>
                  <button className={`btn ${style.viewBtn}`}
                    onClick={() => navigate(`/product-details/${item.id}`)}
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
