import React from 'react';
import PanelCarouselComp from '../components/PanelCarouselComp';
import { Row, Col } from 'reactstrap';
import CategoryCardsComp from '../components/CategoryCardsComp';
import ImageLinkComp from '../components/ImageLinkComp';
import ProductCarouselComp from '../components/ProductCarouselComp';
import ProductCardsPanelComp from '../components/ProductCardsPanelComp';

function Home() {
    return (
        <>
            <PanelCarouselComp></PanelCarouselComp>
            <CategoryCardsComp></CategoryCardsComp>
 
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

        </>
    );
}

export default Home;
