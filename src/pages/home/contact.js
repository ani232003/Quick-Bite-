import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <>
            <section className='contact_section'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col sm={8} className=' text-center'>
                            <h4>
                                We Guarantee
                            </h4>
                            <h2>
                                Fast & Reliable Delivery
                            </h2>
                            <p>
                                Get your order delivered fresh and hot within just 30 minutes. No delays, no excuses—just pure satisfaction.
                            </p>
                            <Link to="/" className='btn btn_red px-4 py-2 rounded-0'>
                                Call: 999-888-7777
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact