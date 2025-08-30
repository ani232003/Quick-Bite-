import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import "../styles/CardStyle.css";


const Cards = ({ image, rating, title, paragraph, price, onAddToCart }) => {
    return (
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4 d-flex">
            <Card className="burger-card h-100 d-flex flex-column">
              
                <div className="img-box">
                    <Card.Img 
                        variant="top" 
                        src={image} 
                        alt={title} 
                        className="card-img" 
                    />
                </div>

              
                <Card.Body className="d-flex flex-column">
                    <div className="card-Header d-flex justify-content-between align-items-center">
                        <span className="card-rating">{rating}</span>
                        <i className="bi bi-heart heart-icon"></i>
                    </div>

                    <Card.Title className="card-title">{title}</Card.Title>
                    <Card.Text className="card-desc flex-grow-1">{paragraph}</Card.Text>

              
                    <div className="card-bottom d-flex justify-content-between align-items-center mt-auto">
                        <span className="card-price">${price}</span>
                        <Button 
                            variant="outline-dark" 
                            size="sm"
                         
                            onClick={onAddToCart}
                        >
                            Add To Cart
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;