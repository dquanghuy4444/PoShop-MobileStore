import React from 'react';
import CarouselComp from '../components/CarouselComp';
import { Row, Col } from 'reactstrap';
import CategoryCardsComp from '../components/CategoryCardsComp';
import ImageLinkComp from '../components/ImageLinkComp';
import ProductCardComp from '../components/ProductCardComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';


function Home() {
    return (
        <>
            <CarouselComp></CarouselComp>
            <CategoryCardsComp></CategoryCardsComp>
            <ImageLinkComp to="/phone" src={ process.env.PUBLIC_URL + "/images/layout/637402554332607768_F-H5_1200x200.jpg" }></ImageLinkComp>

            <div className="panel-productcards">
                <h3>
                    <FontAwesomeIcon icon={ faFireAlt }></FontAwesomeIcon>   
                    {" "} 
                    Khuyến mãi hot
                </h3>
                <Row>
                    <Col xs="12" sm="3">
                        <ProductCardComp></ProductCardComp>                
                    </Col>
                    <Col xs="12" sm="3">
                        <ProductCardComp></ProductCardComp>                
                    </Col>
                    <Col xs="12" sm="3">
                        <ProductCardComp></ProductCardComp>                
                    </Col>
                    <Col xs="12" sm="3">
                        <ProductCardComp></ProductCardComp>                
                    </Col>
                </Row>
            </div>

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
