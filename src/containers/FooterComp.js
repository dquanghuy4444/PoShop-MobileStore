import React from 'react';
import { Row, Col } from 'reactstrap';
import './FooterComp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle , faBirthdayCake , faBook , faPhoneSquare , faBox , faLink  } from '@fortawesome/free-solid-svg-icons';
import MapPanelComp from '../components/Panels/MapPanelComp';

function FooterComp() {
    return (
        <footer>
            <div className="footer-main">
                <Row>
                    <Col xs="6" sm="3">
                        <h5 className="text-center">Chứng nhận</h5>
                        <img src={process.env.PUBLIC_URL + "images/layout/logoSaleNoti.png"} width="60%" className="mt-2"></img>
                        <img src={process.env.PUBLIC_URL + "images/layout/20150827110756-dadangky-500x188.png"} width="60%" className="mt-3"></img>
                    </Col>
                    <Col xs="6" sm="3">
                        <h5 className="text-center">Tư vấn</h5>
                        <h6>Tư vấn mua hàng (miễn phí)</h6>
                        <p>1800 000 có</p>
                        <h6>
                            Góp ý,khiếu nại dịch vụ 
                            <br></br>
                            (9h00 - 18h00)
                        </h6>
                        <p>0963181679</p>
                    </Col>
                    <Col xs="12" sm="3">
                        <h5 className="text-center">Tác giả</h5>
                        <Row>
                            <Col xs="1" sm="1">
                                <FontAwesomeIcon icon={ faUserCircle } ></FontAwesomeIcon>
                            </Col>
                            <Col xs="10" sm="10">
                                <p>Đặng Quang Huy</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="1" sm="1">
                                <FontAwesomeIcon icon={ faBirthdayCake } ></FontAwesomeIcon>
                            </Col>
                            <Col xs="10" sm="10">
                                <p>20/05/1998</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="1" sm="1">
                                <FontAwesomeIcon icon={ faPhoneSquare } ></FontAwesomeIcon>
                            </Col>
                            <Col xs="10" sm="10">
                                <p>0963181679</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="1" sm="1">
                                <FontAwesomeIcon icon={ faLink } ></FontAwesomeIcon>
                            </Col>
                            <Col xs="10" sm="10">
                                <p>
                                    skype : wepiohip
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="1" sm="1">
                                <FontAwesomeIcon icon={ faBook } ></FontAwesomeIcon>
                            </Col>
                            <Col xs="10" sm="10">
                                <p>
                                    <a href="https://www.facebook.com/dqhuy4444" target="_blank">fb/dqhuy4444</a>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="1" sm="1">
                                <FontAwesomeIcon icon={ faBox } ></FontAwesomeIcon>
                            </Col>
                            <Col xs="10" sm="10">
                                <p>
                                    <a href="https://github.com/dquanghuy4444" target="_blank">github/dquanghuy4444</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="3">
                        <h5 className="text-center">Địa chỉ</h5>
                        <MapPanelComp></MapPanelComp>
                    </Col>

                </Row>
            </div>
        </footer>
    );
}

export default FooterComp;
