import React from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ProductCardComp from './ProductCardComp';
import './ProductCarouselComp.css';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductCarouselComp = () => {
    return (
        <div className="panel-productcarousel mt-3 mb-3">
            <Row className="title-productcarousel">
                <Col xs="8" sm="8">
                    <h3>
                        Sản phẩm hấp dẫn
                    </h3>   
                </Col>
                <Col xs="4" sm="4">
                    <Link to="/phone">
                        <h6 className="float-right">
                            Xem tất cả
                        </h6>  
                    </Link>

                </Col>
            </Row>
            <Carousel
                arrows
                plugins={[
                    'arrows',
                    'centered',
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 4
                    }
                    },
                ]}
                slidesPerPage={5}
                breakpoints={{
                    1000: { // these props will be applied when screen width is less than 1000px
                    slidesPerPage: 2,
                    clickToChange: false,
                    centered: false,
                    arrows: true,
                    infinite: false,
                    },
                    500: {
                    slidesPerPage: 1,
                    slidesPerScroll: 1,
                    clickToChange: false,
                    centered: false,
                    animationSpeed: 2000,
                    infinite: false,
                    },
                }}
                animationSpeed={1111}
                
            >
                <ProductCardComp></ProductCardComp>
                <ProductCardComp></ProductCardComp>
                <ProductCardComp></ProductCardComp>
                <ProductCardComp></ProductCardComp>
                <ProductCardComp></ProductCardComp>
                <ProductCardComp></ProductCardComp>
            </Carousel>
        </div>

    );
};

export default ProductCarouselComp;