import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Image1 from "../../Assets/Food_Assets/assets/menu/burger-11.jpg";
import Image2 from "../../Assets/Food_Assets/assets/menu/burger-12.jpg";
import Image3 from "../../Assets/Food_Assets/assets/menu/burger-13.jpg";
import Image4 from "../../Assets/Food_Assets/assets/menu/burger-14.jpg";
import Image5 from "../../Assets/Food_Assets/assets/menu/burger-15.jpg";
import Image6 from "../../Assets/Food_Assets/assets/menu/burger-16.jpg";
import Image7 from "../../Assets/Food_Assets/assets/menu/burger-17.jpg";
import Image8 from "../../Assets/Food_Assets/assets/menu/burger-18.jpg";



const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: "0001", image: Image1, title: "Crispy Chicken", paragraph: "Crispy fried chicken, spicy mayo, tangy pickles, and creamy coleslaw.", rating: 5, price: 99.15, qty: 1 },
    { id: "0002", image: Image2, title: "Ultimate Bacon", paragraph: "Beef patty, double cheddar, crispy bacon, grilled onions & mustard.", rating: 4.5, price: 99.32, qty: 1 },
    { id: "0003", image: Image3, title: "Black Sheep", paragraph: "Juicy lamb patty, avocado, tomato relish, lettuce, and red onion.", rating: 4, price: 69.15, qty: 1 },
    { id: "0004", image: Image4, title: "Vegan Delight", paragraph: "Plant-based patty, dairy-free cheese, grilled veggies & house sauce.", rating: 3.5, price: 99.25, qty: 1 },
    { id: "0005", image: Image5, title: "Double Trouble", paragraph: "Two beef patties, cheddar, mustard, tomatoes, pickles & attitude.", rating: 3.0, price: 59.25, qty: 1 },
    { id: "0006", image: Image6, title: "Turkey Stack", paragraph: "Lean turkey, sharp cheddar, lettuce, tomatoes & onion rings.", rating: 3, price: 79.18, qty: 1 },
    { id: "0007", image: Image7, title: "Smokey House", paragraph: "Grilled patty, BBQ sauce, smoked cheddar, lettuce & pickles.", rating: 2.5, price: 99.19, qty: 1 },
    { id: "0008", image: Image8, title: "Classic Burger", paragraph: "Simple and satisfying – cheddar, ketchup, mustard & pickles.", rating: 2.0, price: 89.12, qty: 1 },
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const increaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <div className="cart-page">
      <Container className="cart-container">
        <h2 className="cart-title">Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/menu" className="btn-go-back">Go Back to Menu</Link>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-img" />

                <div className="cart-details">
                  <h5 className="cart-item-title">{item.title}</h5>
                  <p className="cart-item-desc">{item.paragraph}</p>
                  <span className="cart-price">₹{item.price}</span>
                </div>

                <div className="cart-qty">
                  <button className="qty-btn" onClick={() => decreaseQty(item.id)}>-</button>
                  <span className="qty-value">{item.qty}</span>
                  <button className="qty-btn" onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <div className="cart-total">
                  ₹{(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <h4>Total: ₹{total.toFixed(2)}</h4>
              <Link to="/payment" className="btn-checkout">
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default Cart;
