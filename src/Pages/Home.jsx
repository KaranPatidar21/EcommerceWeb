import React, { useEffect } from 'react'
import { getAllCategories, getAllProducts, getCategoryWiseProducts, getSingleProduct } from '../api/productsApi';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setCategoryProducts, setProducts, setSingleProduct } from '../features/products/productsSlice';
import ShopWithus from '../Components/HomePageComponent/ShopWithus';
import style from "./Home.module.css"
import HomeBanner from '../Components/HomePageComponent/HomeBanner';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products, singleProduct, categories, categoryProducts } = useSelector((state) => state.products);
  useEffect(() => {
    async function fetchData() {
      const products = await getAllProducts();
      const single = await getSingleProduct(1);
      const categories = await getAllCategories();
      const categoryProducts = await getCategoryWiseProducts('gaming');

      dispatch(setProducts(products));
      dispatch(setSingleProduct(single));
      dispatch(setCategories(categories));
      dispatch(setCategoryProducts(categoryProducts));
    }

    fetchData();
  }, [dispatch]);

  console.log(products, singleProduct, categories, categoryProducts, "karan console")
  return (
    <div>
      <HomeBanner />
      <ShopWithus />


      <div className="container-fluid">
        <h2 className='fw-bold text-center mb-5'>Our Products</h2>
        <div className="row">
          {products.slice(0,8).map((item) => (
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
        <div className='d-flex justify-content-center pb-4'>
          <button className={` btn btn-info  text-white m-auto ${style.allProducBtn}`}

            onClick={() => navigate("/all-products")}>All Products</button>
        </div>
      </div>
    </div>
  )
}

export default Home
