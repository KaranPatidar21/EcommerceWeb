import React from 'react';
import style from "./Styles/HomeBanner.module.css"

const HomeBanner = () => {
  return (
  <section className={style.bannerSection}>
      <div className="container">
        <div className={style.bannerContent}>
          <h5 className={style.subHeading}>SPRING / SUMMER COLLECTION 2017</h5>
          <h2 className={style.mainHeading}>Get up to 30% Off <br /> New Arrivals</h2>
  
          <button className={`btn btn-primary ${style.shopBtn}`}>Shop Now</button>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner