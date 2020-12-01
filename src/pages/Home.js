import React from 'react';
import CarouselPanelComp from '../components/Panels/CarouselPanelComp';
import { Row, Col } from 'reactstrap';
import CategoryCardsPanelComp from '../components/Panels/CategoryCardsPanelComp';
import ImageLinkComp from '../components/Links/ImageLinkComp';
import ProductCarouselComp from '../components/Carousels/ProductCarouselComp';
import ProductCardsPanelComp from '../components/Panels/ProductCardsPanelComp';

const items = [
    process.env.PUBLIC_URL + "images/carousel/637402555821736243_C1.jpg",
    process.env.PUBLIC_URL + "images/carousel/637399073081681647_F-C1_1200x300.jpg",
    process.env.PUBLIC_URL + "images/carousel/637386475402445660_MasstelDreamAction-C1.jpg"
  ];

function Home() {
    return (
        <>
            <CarouselPanelComp items={ items }></CarouselPanelComp>
            <CategoryCardsPanelComp></CategoryCardsPanelComp>
 
            <ImageLinkComp to="/phone" src={ process.env.PUBLIC_URL + "/images/layout/637402554332607768_F-H5_1200x200.jpg" }></ImageLinkComp>

            <ProductCardsPanelComp></ProductCardsPanelComp>

            <ProductCarouselComp></ProductCarouselComp>

            <Row>
                <Col xs="12" sm="6">
                    <ImageLinkComp to="/phone" src={ process.env.PUBLIC_URL + "/images/layout/637400805262884991_F-C3_590x160.jpg" }></ImageLinkComp>
                </Col>
                <Col xs="12" sm="6">
                    <ImageLinkComp to="/phone" src={ process.env.PUBLIC_URL + "/images/layout/637399037820121464_VivoV20-C3_590x160@2x.jpg" }></ImageLinkComp>
                </Col>
            </Row>

            <ProductCarouselComp></ProductCarouselComp>
        </>
    );
}

export default Home;
