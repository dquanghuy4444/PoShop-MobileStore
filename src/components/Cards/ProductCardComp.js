import React, { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import buyNow from '../../functions/BuyNow';
import './ProductCardComp.css';

const ProductCardComp = (props) => {
    const history = useHistory()
    // const { history , location , match } = props;
    // console.log( history , location , match );      
    const [isBuyNowBtnInvisible , setIsBuyNowBtnInvisible] = useState(true);
    return (
        <Card className="productcard" onMouseOver={ () => (setIsBuyNowBtnInvisible(false))} onMouseOut={ () => (setIsBuyNowBtnInvisible(true))}>
            <picture className="picture-productcard mt-2 text-center">
                <Link to="/phone/1">
                    <img src={ window.location.origin + "/images/product/phone/apple/ip11promax/637037687757921048_11-pro-max-chung.jpg" } alt="Card image cap" />
                </Link>
                <div className="label-productcard">
                    <p className="badge badge-info mb-2">Đăng ký trước</p>
                    <span className="badge badge-danger">Giảm 2.000.000đ</span>
                </div>
            </picture>
            <CardBody>
                <CardTitle tag="h5">
                    <Link to="/phone/1" className="link-productcard">
                        Iphone 11
                    </Link>
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <strong>22.000.000 đ</strong>
                    <span className="float-right oriprice-productcard">24.000.000 đ</span>
                </CardSubtitle>
                <CardText>Chính hãng , bảo hành 12 tháng, chính sách 1 đổi 1 trong 15 ngày</CardText>
                
                <Button color="danger" className={ isBuyNowBtnInvisible ? "invisible " : "" } onClick={ () =>{ buyNow(1 , history) } }>
                    Mua ngay
                </Button>
            </CardBody>
        </Card>
    );
};


export default ProductCardComp;