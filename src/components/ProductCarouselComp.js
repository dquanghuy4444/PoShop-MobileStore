import React from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ProductCardComp from './ProductCardComp';
import './ProductCarouselComp.css';

const ProductCarouselComp = () => {
    return (
        <Carousel
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
    );
};

export default ProductCarouselComp;