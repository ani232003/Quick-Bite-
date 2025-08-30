import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { useCart } from '../../Components/CartContext'; 

const Cart = () => {
  
    const { cartItems, increaseQty, decreaseQty, total } = useCart();

    return (
        <div className="cart-page">
            <Container className="cart-container">
                <h2 className="cart-title">Your Cart</h2>

             
                {cartItems.length === 0 ? (
                    <Row className="empty-cart text-center">
                        <Col>
                            <p>Your cart is empty.</p>
                            <Link to="/menu" className="btn-go-back">
                                Go Back to Menu
                            </Link>
                        </Col>
                    </Row>
                ) : (
                    <>
                     
                        {cartItems.map((item) => (
                            <Row key={item.id} className="cart-item mb-4">
                         
                                <Col xs={4} sm={3} md={2}>
                                    <img src={item.image} alt={item.title} className="cart-img img-fluid" />
                                </Col>
                           
                                <Col xs={8} sm={6} md={5}>
                                    <div className="cart-details">
                                        <h5 className="cart-item-title">{item.title}</h5>
                                        <p className="cart-item-desc">{item.paragraph}</p>
                                    
                                        <span className="cart-price">${item.price}</span>
                                    </div>
                                </Col>
                            
                                <Col xs={6} sm={3} md={3} className="mt-3 mt-sm-0 text-center">
                                    <div className="cart-qty d-flex justify-content-center align-items-center">
                                        <button className="qty-btn" onClick={() => decreaseQty(item.id)}>-</button>
                                        <span className="qty-value mx-2">{item.qty}</span>
                                        <button className="qty-btn" onClick={() => increaseQty(item.id)}>+</button>
                                    </div>
                                </Col>
                              
                                <Col xs={6} sm={12} md={2} className="mt-3 mt-md-0 text-end">
                                    <div className="cart-total">
                                        ${(item.price * item.qty).toFixed(2)}
                                    </div>
                                </Col>
                            </Row>
                        ))}

                        <Row className="cart-summary mt-4">
                            <Col className="text-end">
                           
                                <h4>Total: ${total.toFixed(2)}</h4>
                                <Link to="/payment" className="btn-checkout">
                                    Proceed to Checkout
                                </Link>
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        </div>
    );
};

export default Cart;