import React from 'react';
import CarouselPanelComp from '../components/Panels/CarouselPanelComp';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

const items = [
    process.env.PUBLIC_URL + "images/carousel/637406202146707827_F-C1_1200x300.jpg",
    process.env.PUBLIC_URL + "images/carousel/637407383764082449_F-C1_1200x300.jpg",
    process.env.PUBLIC_URL + "images/carousel/637407732806654809_C1-1200x300.jpg"
  ];

function Phone() {
    return (
        <>
            <CarouselPanelComp items={ items }></CarouselPanelComp>
            <Row>
                <Col xs="0" sm="3">
                    <ListGroup>
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col xs="12" sm="9">Sản phẩm</Col>
            </Row>
        </>
    );
}

export default Phone;