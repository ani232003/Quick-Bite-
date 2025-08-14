import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import proImage from "../../Assets/Food_Assets/assets/promotion/pro.png";

const Promotion = () => {
    return (
        <>
            <section className='promotion_section'>
                <Container>
                    <Row>
                        <Col lg={6} className='text-center mb-5 mb-lg-0'>
                            <img src={proImage} alt="Promotion" className='img-fluid' />
                        </Col>
                        <Col lg={6} className='px-5'>
                            <h2>Burgers that bring people together</h2>
                            <p>
                                Whether you're grabbing a quick bite or sharing a feast with friends,
                                our burgers are stacked high with flavor, made fresh to order, and delivered hot.
                                Because great food isn't just fuel — it's an experience.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        Every bite is packed with bold flavor, melty cheese, and crispy toppings.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Order combos and get crispy fries, cold drinks, and big savings.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Fast delivery. Fresh ingredients. Real satisfaction — every single time.
                                    </p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='bg_parallax_scroll'>
                {/* Add background image in CSS for parallax effect */}
            </section>
        </>
    );
};

export default Promotion;
