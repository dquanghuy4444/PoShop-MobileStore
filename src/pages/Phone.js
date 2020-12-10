import React from 'react';
import CarouselPanelComp from '../components/Panels/CarouselPanelComp';
import { Row, Col } from 'reactstrap';
import './Phone.css';
import ProductCardComp from '../components/Cards/ProductCardComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter , faMoneyBillAlt , faDiceD6 , faMobileAlt, faCube } from '@fortawesome/free-solid-svg-icons';

const items = [
  window.location.origin + "/images/carousel/637406202146707827_F-C1_1200x300.jpg",
  window.location.origin + "/images/carousel/637407383764082449_F-C1_1200x300.jpg",
  window.location.origin + "/images/carousel/637407732806654809_C1-1200x300.jpg"
];

function Phone() {
    return (
        <>
            <CarouselPanelComp items={ items }></CarouselPanelComp>
            <Row >
                <Col xs="0" sm="3" >
                  <div id="accordion" className="filter-container">
                    <div className="card">
                      <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#collapseOne">
                          <FontAwesomeIcon icon={ faMoneyBillAlt } ></FontAwesomeIcon> Lọc theo giá
                        </a>
                      </div>
                      <div id="collapseOne" className="collapse show" data-parent="#accordion">
                        <div className="card-body">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="optradio" />Dưới 10 triệu 
                            </label>
                          </div>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="optradio" />Từ 10 đến 20 triệu
                            </label>
                          </div>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="optradio" disabled />Trên 20 triệu
                            </label>
                          </div>                        
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                          <FontAwesomeIcon icon={ faDiceD6 } ></FontAwesomeIcon> Lọc theo thương hiệu
                        </a>
                      </div>
                      <div id="collapseTwo" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" defaultValue />Samsung
                            </label>
                          </div>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" defaultValue />Iphone
                            </label>
                          </div>                        
                        </div>
                      </div>
                    </div>
                    <div className="card button-filter">
                      <div className="card-header">
                        <div className="collapsed card-link text-center">
                          <span>
                            <FontAwesomeIcon icon={ faFilter } ></FontAwesomeIcon> Lọc sản phẩm
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs="12" sm="9">
                    <h3 className="text-center mt-3 mb-3"> 
                      <FontAwesomeIcon icon={ faCube } ></FontAwesomeIcon> Sản phẩm
                    </h3>
                    <Row >
                        <Col xs="12" sm="4">
                            <ProductCardComp></ProductCardComp>
                        </Col>
                        <Col xs="12" sm="4">
                            <ProductCardComp></ProductCardComp>
                        </Col>
                        <Col xs="12" sm="4">
                            <ProductCardComp></ProductCardComp>
                        </Col>
                        <Col xs="12" sm="4">
                            <ProductCardComp></ProductCardComp>
                        </Col>
                        <Col xs="12" sm="4">
                            <ProductCardComp></ProductCardComp>
                        </Col>
                        <Col xs="12" sm="4">
                            <ProductCardComp></ProductCardComp>
                        </Col>
                        <Col xs="12" sm="4">
                            <ProductCardComp></ProductCardComp>
                        </Col>
                        <Col xs="12" sm="4">
                            <ProductCardComp></ProductCardComp>
                        </Col>
                        <Col xs="12" sm="4">
                            <ProductCardComp></ProductCardComp>
                        </Col>
                        <Col xs="12" sm="4">
                            <ProductCardComp></ProductCardComp>
                        </Col>
                        <Col xs="12" sm="4">
                            <ProductCardComp></ProductCardComp>
                        </Col>
                        <Col xs="12" sm="4">
                            <ProductCardComp></ProductCardComp>
                        </Col>

                    </Row>

                </Col>
            </Row>
        </>
    );
}

export default Phone;