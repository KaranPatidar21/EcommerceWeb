import React from 'react';
import style from "./Footer.module.css";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={style.footerSection}>
      <div className="container pt-5">
        <div className="row">

          {/* Logo + Contact */}
          <div className="col-md-4">
            <Link className={`navbar-brand ${style.logo}`} to="/">
              K-<span>SHOP</span>
            </Link>
            <p className="mt-3">
              <b>ADDRESS:</b> 28 White Tower, Street Name, New York City, USA
            </p>
            <p><b>TELEPHONE:</b> +91 77460998383</p>
            <p><b>EMAIL:</b> k-shop@gmail.com</p>
          </div>

          {/* Menu Links */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">MENU</h6>
            <ul className={style.footerMenu}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* About + Socials */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">ABOUT US</h6>
            <p>
              We bring you the best products with unbeatable quality and price. 
              Shop with us for a premium experience and fast delivery.
            </p>
            <div className={style.socialIcons}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaPinterestP /></a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className={`text-center mt-4 mb-4 ${style.footerBottom}`}>
          <p className="mb-0 fs-6">© {new Date().getFullYear()} All Rights Reserved By <span className='text-success fw-bold'>Karan Patidar </span> Distributed By <span className='text-success fw-bold'>Karan Patidar </span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
