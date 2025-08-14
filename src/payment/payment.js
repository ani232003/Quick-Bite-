import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './payment.css';

const Pay = () => {
    return (
        <section className="pay_section">
            <Container>
                <form>
                    <Row>
                        {/* Billing Address */}
                        <Col lg={6} md={12} className="pay_col">
                            <h3 className="title">Billing Address</h3>

                            <div className="inputBox">
                                <label>Full Name :</label>
                                <input type="text" placeholder="Enter Your Full Name" />
                            </div>

                            <div className="inputBox">
                                <label>Email :</label>
                                <input type="email" placeholder="Enter Your Email" />
                            </div>

                            <div className="inputBox">
                                <label>Address :</label>
                                <input type="text" placeholder="Enter Your Address" />
                            </div>

                            <div className="inputBox">
                                <label>City :</label>
                                <input type="text" placeholder="Enter Your City" />
                            </div>

                            <Row>
                                <Col>
                                    <div className="inputBox">
                                        <label>State :</label>
                                        <input type="text" placeholder="Enter Your State" />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="inputBox">
                                        <label>Pincode :</label>
                                        <input type="number" placeholder="Enter Your Pincode" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        {/* Payment Details */}
                        <Col lg={6} md={12} className="pay_col">
                            <h3 className="title">Payment</h3>

                            <div className="inputBox">
                                <label>Cards Accepted :</label>
                                <img src="/images/cards.png" alt="Cards" />
                            </div>

                            <div className="inputBox">
                                <label>Name on Card :</label>
                                <input type="text" placeholder="Enter Card Name" required />
                            </div>

                            <div className="inputBox">
                                <label>Credit Card Number :</label>
                                <input type="text" placeholder="1111-2222-3333-4444" maxLength="19" required />
                            </div>

                            <div className="inputBox">
                                <label>Exp Month :</label>
                                <select>
                                    <option>Choose month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                            </div>

                            <Row>
                                <Col>
                                    <div className="inputBox">
                                        <label>Exp Year :</label>
                                        <select>
                                            <option>Choose Year</option>
                                            <option>2025</option>
                                            <option>2026</option>
                                            <option>2027</option>
                                            <option>2028</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="inputBox">
                                        <label>CVV :</label>
                                        <input type="number" placeholder="1234" required />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    {/* Submit */}
                    <Row>
                        <Col>
                            <input type="submit" value="Proceed to Checkout" className="submit_btn" />
                        </Col>
                    </Row>
                </form>
            </Container>
        </section>
    );
};

export default Pay;
