import React from 'react';
import { Row, Col } from 'reactstrap';
import CategoryCardComp from '../Cards/CategoryCardComp';

const categories = [
    {
        to : "/phone",
        src : process.env.PUBLIC_URL + "/images/layout/category card/dien-thoai.png",
        text : "Điện thoại",
    },
    {
        to : "/brand/apple",
        src : process.env.PUBLIC_URL + "/images/layout/category card/apple.png",
        text : "Apple",
    },
    {
        to : "/watch",
        src : process.env.PUBLIC_URL + "/images/layout/category card/smart-watch.png",
        text : "Smart Watch",
    },
    {
        to : "/sale",
        src : process.env.PUBLIC_URL + "/images/layout/category card/may_cu.png",
        text : "Săn sale",
    },
    {
        to : "/tablet",
        src : process.env.PUBLIC_URL + "/images/layout/category card/tablet.png",
        text : "Tablet",
    },
    {
        to : "/accessories",
        src : process.env.PUBLIC_URL + "/images/layout/category card/cap-sac.png",
        text : "Phụ kiện",
    },
]

const CategoryCardsPanelComp = () => {

    const showCateCards = () =>{
        return categories.map((catecard , index) =>{
            return (
                <Col xs="6" sm="2" key={ index }>
                    <CategoryCardComp to={ catecard.to } src={ catecard.src } text={ catecard.text }></CategoryCardComp>
                </Col>
            )
        })
    }
    return (
        <Row>
            { showCateCards() }
        </Row>

    );
};

export default CategoryCardsPanelComp;