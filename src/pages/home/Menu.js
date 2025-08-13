/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Cards from '../../Components/Card';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from "../../Assets/Food_Assets/assets/menu/burger-11.jpg";
import Image2 from "../../Assets/Food_Assets/assets/menu/burger-12.jpg";
import Image3 from "../../Assets/Food_Assets/assets/menu/burger-13.jpg";
import Image4 from "../../Assets/Food_Assets/assets/menu/burger-14.jpg";
import Image5 from "../../Assets/Food_Assets/assets/menu/burger-15.jpg";
import Image6 from "../../Assets/Food_Assets/assets/menu/burger-16.jpg";
import Image7 from "../../Assets/Food_Assets/assets/menu/burger-17.jpg";
import Image8 from "../../Assets/Food_Assets/assets/menu/burger-18.jpg"
import { Link } from 'react-router-dom';

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
            paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
            rating: 5,
            price: 99.15,
        },
        {
            id: "0002",
            image: Image2,
            title: "Ultimate Bacon",
            paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
            rating: 4.5,
            price: 99.32,
        },
        {
            id: "0003",
            image: Image3,
            title: "Black Sheep",
            paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
            rating: 4,
            price: 69.15,
        },
        {
            id: "0004",
            image: Image4,
            title: "Vegan Burger",
            paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
            rating: 3.5,
            price: 99.25,
        },
        {
            id: "0005",
            image: Image5,
            title: "Double Burger",
            paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
            rating: 3.0,
            price: 59.25,
        },
        {
            id: "0006",
            image: Image6,
            title: "Turkey Burger",
            paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
            rating: 3,
            price: 79.18,
        },
        {
            id: "0007",
            image: Image7,
            title: "Smokey House",
            paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
            rating: 2.5,
            price: 99.19,
        },
        {
            id: "0008",
            image: Image8,
            title: "Classic Burger",
            paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
            rating: 2.0,
            price: 89.12,
        },
    ];
    return (
        <>
            <section className='menu_section'>
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}></Col>
                        <h2>Our Creazy Burgers</h2>
                        <p>
                            Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                            dolor primis libero tempus, blandit a cursus varius luctus neque
                            magna</p>
                    </Row>
                    <Row>
                        {mockData.map((data, index) => {
                            return (
                                <Cards
                                    key={index}
                                    image={data.image}
                                    rating={ratingsCount(data.rating)}
                                    title={data.title}
                                    paragraph={data.paragraph}
                                    price={data.price}
                                />
                            );
                        })}
                    </Row>
                    <Row className='pt-5'>
                        <Col sm={6} lg={5}>
                            <div className='ads_box ads_img1 mb-5 mb-md-0'>
                                <h4 className='mb-0'>Get Your Free</h4>
                                <h5>Chesse Fries</h5>
                                <Link to="/" className='btn btn_red px-4 rounded-0'>
                                    Learn More
                                </Link>
                            </div>
                        </Col>
                        <Col sm={6} lg={7}>
                            <div className='ads_box ads_img2'>
                                <h4 className='mb-0'>Get Your Free</h4>
                                <h5>Chesse Fries</h5>
                                <Link to="/" className='btn btn_red px-4 rounded-0'>
                                    Learn More
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Menu