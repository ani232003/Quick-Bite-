import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import "../styles/CardStyle.css"


const Cards = ({ image, rating, title, paragraph, price }) => {
    return (
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="burger-card">
                <div className="img-box">
                    <Card.Img variant="top" src={image} alt={title} className="card-img" />
                </div>
                <Card.Body>
                    <div className="card-Header">
                        <span className="card-rating">{rating}</span>
                        <i className="bi bi-heart heart-icon"></i>
                    </div>
                    <Card.Title className="card-title">{title}</Card.Title>
                    <Card.Text className="card-desc">{paragraph}</Card.Text>
                    <div className="card-bottom">
                        <span className="card-price">${price}</span>
                        <Button variant="outline-dark" size="sm">Add To Cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};


export default Cards;
