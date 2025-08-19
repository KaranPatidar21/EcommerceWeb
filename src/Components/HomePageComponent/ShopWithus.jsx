import React from 'react';
import style from "./Styles/ShopWithus.module.css"
import { FiTruck } from 'react-icons/fi';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { PiSealCheckBold } from 'react-icons/pi';

const ShopWithus = () => {
  return (
    <div className='container mt-5'>
      <h2 className='fw-bold text-center'>Why Shop With Us</h2>
      <div className='row py-5'>
        <div className='col-sm-6 col-md-4 mb-4'>
          <div className={style.carts}>
            <p><FiTruck size={50} /></p>
            <h5 className='fw-bold'>Fast Delivery</h5>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
        <div className='col-sm-6 col-md-4 mb-4'>
          <div className={style.carts}>
            <p><FaFreeCodeCamp  size={50} /></p>
            <h5 className='fw-bold'>Free Shiping</h5>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
        <div className='col-sm-6 col-md-4 mb-4'>
          <div className={style.carts}>
            <p><PiSealCheckBold  size={50} /></p>
            <h5 className='fw-bold'>Best Quality</h5>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShopWithus