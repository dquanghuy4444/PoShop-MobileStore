import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import './ProductCardComp.css';

const ProductCardComp = (props) => {
    return (
        <Card className="cate-card">
            <picture className="picture-productcard mt-2">
                <Link to="/phone">
                    <img src={ process.env.PUBLIC_URL + "/images/product/phone/apple/ip11promax/637037687757921048_11-pro-max-chung.jpg" } alt="Card image cap" />
                </Link>
                <div className="label-productcard">
                    <p className="badge badge-info mb-2">Đăng ký trước</p>
                    <span className="badge badge-danger">Giảm 2.000.000đ</span>
                </div>
            </picture>
            <CardBody>
                <CardTitle tag="h5">
                    <Link to="/phone" className="link-productcard">
                        Iphone 11
                    </Link>
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <strong>22.000.000 đ</strong>
                    <span className="float-right oriprice-productcard">24.000.000 đ</span>
                </CardSubtitle>
                <CardText>Chính hãng , bảo hành 12 tháng, chính sách 1 đổi 1 trong 15 ngày</CardText>
            </CardBody>
        </Card>
    );
};

export default ProductCardComp;