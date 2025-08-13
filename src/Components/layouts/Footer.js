import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {


  const [isVisible, setisVisible] = useState(false)

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;

    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setisVisible(true) : setisVisible(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
  })





  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0 text-center'>
              <h5>Our Address</h5>
              <p>5505 Waterford District</p>
              <p>Dr, Miami, FL 33126</p>
              <p>United States</p>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0 text-center'>
              <h5>Working Hours</h5>
              <p>Mon - Fri: 9:00 AM – 10:00 PM</p>
              <p>Saturday: 10:00 AM – 8:30 PM</p>
              <p>Sunday: 12:00 PM – 5:00 PM</p>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0 text-center'>
              <h5>Order Now</h5>
              <Link to="/" className='calling'>
                <p>999-888-7777</p>
              </Link>
              <p>Fast & Fresh Food Delivery</p>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0 text-center'>
              <h5>Stay Connected with Us</h5>
              <div className='d-flex justify-content-center gap-3 social-icons'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
              </div>
            </Col>
          </Row>
          <div className='copy_right text-center mt-5 pt-3 border-top'>
            <ul className='list-inline mb-0'>
              <li className='list-inline-item'>
                &copy; {new Date().getFullYear()} Food Delivery. All rights reserved.
              </li>
              <li className='list-inline-item'>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li className='list-inline-item'>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </Container>
      </footer>

      <div className='scroll_top' onClick={scrollTop}>
        <FaArrowUp />
      </div>
    </>
  )
}

export default Footer;
