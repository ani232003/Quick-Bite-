import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Images
import Pizza from "../../Assets/Food_Assets/assets/about/pizza.png";
import Salad from "../../Assets/Food_Assets/assets/about/salad.png";
import Delivery from "../../Assets/Food_Assets/assets/about/delivery-bike.png";

const About = () => {
    const mockData = [
        {
            image: Pizza,
            title: "Fresh Ingredients",
            paragraph: `Our burgers start with fresh, locally sourced ingredients. From the buns to the beef, everything is selected to give you the ultimate juicy, flavorful bite every single time.`,
        },
        {
            image: Salad,
            title: "Made With Love",
            paragraph: `Every burger is handcrafted by our passionate chefs who truly care about quality. No frozen patties, no shortcuts – just real food made with real heart.`,
        },
        {
            image: Delivery,
            title: "Fast & Hot Delivery",
            paragraph: `We don’t just deliver fast – we deliver hot, fresh, and right on time. Whether it's lunch, dinner, or midnight cravings, we’ve got your back.`,
        },
    ];

    return (
        <>
            <section className='about_section'>
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className="text-center">
                            <h2>Burgers taste better when shared with the people you love</h2>
                            <p>
                                Whether you're feeding your family, sharing with friends, or just
                                treating yourself — our burgers are built to satisfy every craving.
                                Fast, fresh, and full of flavor.
                            </p>
                            <Link to="/" className="btn order_now">Explore full menu</Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='about_wrapper'>
                <Container>
                    <Row className='justify-content-md-center'>
                        {mockData.map((cardData, index) => (
                            <Col md={6} lg={4} className='mb-4 md-0' key={index}>
                                <div className='about_box text-center'>
                                    <div className='about_icon'>
                                        <img src={cardData.image} className='img-fluid' alt="img" />
                                        <h4>{cardData.title}</h4>
                                        <p>{cardData.paragraph}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default About;
