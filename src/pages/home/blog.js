import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import blog1 from "../../Assets/Food_Assets/assets/blog/review-author-1.jpg";
import blog2 from "../../Assets/Food_Assets/assets/blog/review-author-2.jpg";
import blog3 from "../../Assets/Food_Assets/assets/blog/review-author-3.jpg";
import blog4 from "../../Assets/Food_Assets/assets/blog/review-author-5.jpg";

const Blog = () => {
    const testimonials = [
        {
            img: blog1,
            feedback: "The food was absolutely delicious, and the delivery was incredibly fast. I especially loved how fresh the ingredients tasted, and the packaging kept everything warm. Definitely my go-to place from now on!",
            rating: 5,
            name: "John Doe"
        },
        {
            img: blog2,
            feedback: "Great variety on the menu and top-notch quality. I ordered the pasta and it was cooked perfectly, with just the right amount of sauce. Customer service was friendly and made the whole experience even better.",
            rating: 4,
            name: "Sarah Lee"
        },
        {
            img: blog3,
            feedback: "I tried their chef’s special pizza and it blew my mind! The crust was crispy, the toppings were generous, and it had the perfect blend of flavors. Can’t wait to try more from their menu.",
            rating: 5,
            name: "Michael Smith"
        },
        {
            img: blog4,
            feedback: "From the starters to the desserts, everything was spot on. The chocolate cake in particular was heavenly — moist, rich, and full of flavor. This place has officially become my favorite for sweet treats!",
            rating: 4,
            name: "Emma Watson"
        }
    ];

    return (
        <section className='blog_section'>
            <Container>
                <Row>
                    <Col>
                        <Carousel indicators={false} controls={false} interval={3000} pause={false}>
                            {testimonials.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <div className="carousel-caption">
                                        <div className="user_img">
                                            <img src={item.img} alt="customer" />
                                        </div>
                                        <p>"{item.feedback}"</p>
                                        <div className="item_rating">
                                            {Array(item.rating).fill().map((_, i) => (
                                                <i key={i} className="fa fa-star"></i>
                                            ))}
                                        </div>
                                        <h5>- {item.name}</h5>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Blog;
