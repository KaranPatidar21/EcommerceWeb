import React, { useState } from "react";
import style from "./Cart.module.css";

function Cart() {
  // 🛒 Cart data array
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product Name Here",
      seller: "RetailNet",
      price: 1299,
      originalPrice: 1999,
      discount: "35% off",
      qty: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Another Product",
      seller: "OmniTech",
      price: 799,
      originalPrice: 1299,
      discount: "40% off",
      qty: 2,
      image: "https://via.placeholder.com/150",
    },
  ]);

  // 🔼 Increase Quantity
  const increaseQty = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCartItems(updatedItems);
  };

  // 🔽 Decrease Quantity
  const decreaseQty = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setCartItems(updatedItems);
  };

  // ❌ Remove Item
  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  // 💰 Calculate Total
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const originalTotal = cartItems.reduce(
    (acc, item) => acc + item.originalPrice * item.qty,
    0
  );
  const discount = originalTotal - totalPrice;

  return (
    <section className={style.cartSection}>


    <div className="container my-4">
      <div className="row">
        {/* Left Section - Cart Items */}
        <div className="col-md-8">
          <div className={style.cartBox}>
            <h5 className={style.cartTitle}>My Cart ({cartItems.length})</h5>

            {cartItems.map((item) => (
              <div key={item.id} className={style.cartItem}>
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className={style.productImg}
                    />
                  </div>
                  <div className="col-md-9">
                    <h6 className={style.productTitle}>{item.name}</h6>
                    <p className={style.productSeller}>Seller: {item.seller}</p>
                    <div className={style.priceSection}>
                      <span className={style.price}>₹{item.price}</span>
                      <span className={style.originalPrice}>
                        ₹{item.originalPrice}
                      </span>
                      <span className={style.discount}>{item.discount}</span>
                    </div>
                    <div className={style.qtySection}>
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                      <button
                        className={style.removeBtn}
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <p className="text-center">Your cart is empty</p>
            )}
          </div>
        </div>

        {/* Right Section - Price Details */}
        <div className="col-md-4">
          <div className={style.priceBox}>
            <h5 className={style.priceTitle}>PRICE DETAILS</h5>
            <div className={style.priceRow}>
              <span>Price ({cartItems.length} items)</span>
              <span>₹{originalTotal}</span>
            </div>
            <div className={style.priceRow}>
              <span>Discount</span>
              <span className={style.greenText}>-₹{discount}</span>
            </div>
            <div className={style.priceRow}>
              <span>Delivery Charges</span>
              <span className={style.greenText}>Free</span>
            </div>
            <hr />
            <div className={`${style.priceRow} ${style.totalRow}`}>
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>
            <button className={style.placeOrderBtn}>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
        </section>
  );
}

export default Cart;
