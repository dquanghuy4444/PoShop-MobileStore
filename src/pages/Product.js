import React from 'react';
import './Product.css';
import CarouselPanelComp from '../components/Panels/CarouselPanelComp';
import { Row, Col , Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter , faMoneyBillAlt , faDiceD6 , faMobileAlt, faCube } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import buyNow from  '../functions/BuyNow.js';

import {
    Link,
    useParams
} from "react-router-dom";

const items = [
    window.location.origin + "/images/carousel/637406202146707827_F-C1_1200x300.jpg",
    window.location.origin + "/images/carousel/637407383764082449_F-C1_1200x300.jpg",
    window.location.origin + "/images/carousel/637407732806654809_C1-1200x300.jpg"
];

const props = {width: 500, height: 500, zoomWidth: 500, img: window.location.origin + "/images/product/phone/apple/ip11promax/637037687757921048_11-pro-max-chung.jpg",
zoomPosition: "original"};

function Product(props) {
    const { id } = useParams();
    const { history } = props;

    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to="/phone">Phone</Link>
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="product-container">
                <div className="product-title">                 
                    <h4>Điện thoại iphone 12</h4>
                </div>
                <Row  className="mt-1">
                    <Col xs="12" sm="5">
                        <div className="imgproduct-container">
                            <Zoom zoomMargin={120}>
                                <img
                                alt="product"
                                src={window.location.origin + "/images/product/phone/apple/ip11promax/637037687757921048_11-pro-max-chung.jpg"}
                                width="320"
                                />
                            </Zoom>                          
                        </div>
                    </Col>
                    <Col xs="12" sm="7">
                        <h4>
                            Giá khuyến mãi : 20.000.000 đ
                        </h4>
                        <div className="product-detail">
                            <p>Màn hình : 6.7", Super Retina XDR, AMOLED</p>
                            <p>Camera sau : 12.0 MP + 12.0 MP + 12.0 MP</p>
                            <p>Camera selfie : 12.0 MP</p>
                            <p>CPU : A14 Bionic</p>
                            <p>Bộ nhớ trong : 256 GB</p>
                        </div>
                        <Button className="product-buynow" onClick={ () =>{ buyNow(id , history) } }>Mua ngay</Button>
                    </Col>
                </Row>
            </div>
            <CarouselPanelComp items={ items }></CarouselPanelComp>
        </div>
    );
}

export default Product;