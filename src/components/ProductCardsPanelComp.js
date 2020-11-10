import React from 'react';
import './ProductCardsPanelComp.css';
import { Row, Col } from 'reactstrap';
import ProductCardComp from '../components/ProductCardComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ProductCardsPanelComp() {
    return (
        <div className="panel-productcards">
            <Row>
                <Col xs="8" sm="8">
                    <h3>
                        <FontAwesomeIcon icon={ faFireAlt }></FontAwesomeIcon>   
                        {" "} 
                        Khuyến mãi hot
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
    );
}

export default ProductCardsPanelComp;
