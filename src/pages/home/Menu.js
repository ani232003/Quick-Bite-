/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Cards from '../../Components/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Images
import Image1 from "../../Assets/Food_Assets/assets/menu/burger-11.jpg";
import Image2 from "../../Assets/Food_Assets/assets/menu/burger-12.jpg";
import Image3 from "../../Assets/Food_Assets/assets/menu/burger-13.jpg";
import Image4 from "../../Assets/Food_Assets/assets/menu/burger-14.jpg";
import Image5 from "../../Assets/Food_Assets/assets/menu/burger-15.jpg";
import Image6 from "../../Assets/Food_Assets/assets/menu/burger-16.jpg";
import Image7 from "../../Assets/Food_Assets/assets/menu/burger-17.jpg";
import Image8 from "../../Assets/Food_Assets/assets/menu/burger-18.jpg";

const Menu = () => {

    const ratingsCount = (rating) => {
        const stars = [];

        for (let i = 0; i < 5; i++) {
            if (rating >= 1) {
                stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
            } else if (rating >= 0.5) {
                stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
            } else {
                stars.push(<i key={i} className="bi bi-star text-warning"></i>);
            }
            rating -= 1;
        }

        return stars;
    };

    const mockData = [
        {
            id: "0001",
            image: Image1,
            title: "Crispy Chicken",
            paragraph: "Crispy fried chicken, spicy mayo, tangy pickles, and creamy coleslaw.",
            rating: 5,
            price: 99.15,
        },
        {
            id: "0002",
            image: Image2,
            title: "Ultimate Bacon",
            paragraph: "Beef patty, double cheddar, crispy bacon, grilled onions & mustard.",
            rating: 4.5,
            price: 99.32,
        },
        {
            id: "0003",
            image: Image3,
            title: "Black Sheep",
            paragraph: "Juicy lamb patty, avocado, tomato relish, lettuce, and red onion.",
            rating: 4,
            price: 69.15,
        },
        {
            id: "0004",
            image: Image4,
            title: "Vegan Delight",
            paragraph: "Plant-based patty, dairy-free cheese, grilled veggies & house sauce.",
            rating: 3.5,
            price: 99.25,
        },
        {
            id: "0005",
            image: Image5,
            title: "Double Trouble",
            paragraph: "Two beef patties, cheddar, mustard, tomatoes, pickles & attitude.",
            rating: 3.0,
            price: 59.25,
        },
        {
            id: "0006",
            image: Image6,
            title: "Turkey Stack",
            paragraph: "Lean turkey, sharp cheddar, lettuce, tomatoes & onion rings.",
            rating: 3,
            price: 79.18,
        },
        {
            id: "0007",
            image: Image7,
            title: "Smokey House",
            paragraph: "Grilled patty, BBQ sauce, smoked cheddar, lettuce & pickles.",
            rating: 2.5,
            price: 99.19,
        },
        {
            id: "0008",
            image: Image8,
            title: "Classic Burger",
            paragraph: "Simple and satisfying – cheddar, ketchup, mustard & pickles.",
            rating: 2.0,
            price: 89.12,
        },
    ];

    return (
        <section className='menu_section'>
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }} className="text-center">
                        <h2>Our Crazy Burger Collection</h2>
                        <p>
                            From cheesy classics to bold, spicy bites — our burgers are crafted to satisfy every kind of craving. 
                            Explore our mouth-watering menu and find your next favorite!
                        </p>
                    </Col>
                </Row>

                <Row>
                    {mockData.map((data, index) => (
                        <Cards
                            key={index}
                            image={data.image}
                            rating={ratingsCount(data.rating)}
                            title={data.title}
                            paragraph={data.paragraph}
                            price={data.price}
                        />
                    ))}
                </Row>

                <Row className='pt-5'>
                    <Col sm={6} lg={5}>
                        <div className='ads_box ads_img1 mb-5 mb-md-0'>
                            <h4 className='mb-0'>Free Side Alert!</h4>
                            <h5>Get Free Cheese Fries</h5>
                            <Link to="/" className='btn btn_red px-4 rounded-0'>
                                Learn More
                            </Link>
                        </div>
                    </Col>
                    <Col sm={6} lg={7}>
                        <div className='ads_box ads_img2'>
                            <h4 className='mb-0'>Fries on Us</h4>
                            <h5>With Every Burger Combo</h5>
                            <Link to="/" className='btn btn_red px-4 rounded-0'>
                                Learn More
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Menu;
