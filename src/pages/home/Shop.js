import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import appstore from "../../Assets/Food_Assets/assets/shop/appstore.png";
import eshop from "../../Assets/Food_Assets/assets/shop/e-shop.png";
import google from "../../Assets/Food_Assets/assets/shop/googleplay.png";
import brand1 from "../../Assets/Food_Assets/assets/brands/brand-11.png";
import brand2 from "../../Assets/Food_Assets/assets/brands/brand-12.png";
import brand3 from "../../Assets/Food_Assets/assets/brands/brand-13.png";
import brand4 from "../../Assets/Food_Assets/assets/brands/brand-14.png";
import brand5 from "../../Assets/Food_Assets/assets/brands/brand-15.png";
import brand6 from "../../Assets/Food_Assets/assets/brands/brand-16.png";
import brand7 from "../../Assets/Food_Assets/assets/brands/brand-17.png";
import brand8 from "../../Assets/Food_Assets/assets/brands/brand-18.png";

const Shop = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];


  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const brandSlides = chunkArray(brands, 4);

  return (
    <>
      {/* Shop Section */}
      <section className='shop_section'>
        <Container>
          <Row className='align-item-center'>
            <Col lg={6} className='text-center text-lg-start mb-5'>
              <h4>Download mobile App and </h4>
              <h2>save up to 20%</h2>
              <p>Aliquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit varius</p>
              <Link>
                <img src={appstore} alt="IOS" className='img-fluid me-3' />
              </Link>
              <Link>
                <img src={google} alt="Android" className='img-fluid me-3' />
              </Link>
            </Col>
            <Col>
              <img src={eshop} alt="eshop" className='img-fluid' />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Brand Section */}
      <section className='brand_section'>
        <Container>
          <Row>
            <Col>
              <Carousel indicators={false} controls={false} interval={2000} pause={false}>
                {brandSlides.map((slide, index) => (
                  <Carousel.Item key={index}>
                    <div className='d-flex align-items-center justify-content-around'>
                      {slide.map((brand, idx) => (
                        <div className='brand_img' key={idx}>
                          <img src={brand} alt="brand_img" className='img-fluid' />
                        </div>
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Shop;
