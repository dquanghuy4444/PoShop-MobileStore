import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  InputGroup, InputGroupAddon , Input 
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt , faClock , faHeadphonesAlt , faDiceD6 , faAppleAlt , faShoppingCart , faTags , faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "./NavbarComp.css";

const NavbarComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-fixed">
      <Navbar light expand="md" className="navbar-comp">
        <Link to="/" className="link-nav-comp navbar-brand">
          <FontAwesomeIcon icon={ faMobileAlt } size="lg" spin ></FontAwesomeIcon>
          {" "}
          PoShopz
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar> 
            <NavItem>
              <Link to="/phone" className="nav-link">
                <FontAwesomeIcon icon={ faMobileAlt } ></FontAwesomeIcon>
                {" "}
                Điện thoại
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/watch" className="nav-link">
                <FontAwesomeIcon icon={ faClock } ></FontAwesomeIcon>
                {" "}
                Đồng hồ
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/accessories" className="nav-link">
                <FontAwesomeIcon icon={ faHeadphonesAlt } ></FontAwesomeIcon>
                {" "}
                Phụ kiện
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="ddl-comp">
                <FontAwesomeIcon icon={ faDiceD6 } ></FontAwesomeIcon>
                {" "}
                Nhãn hiệu
              </DropdownToggle>
              <DropdownMenu left="true">
                <DropdownItem>
                  <Link to="/brand/apple">
                    <FontAwesomeIcon icon={ faAppleAlt } ></FontAwesomeIcon>
                    {" "}
                    Apple
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="/brand/samsung">
                    <FontAwesomeIcon icon={ faDiceD6 } ></FontAwesomeIcon>
                    {" "}
                    SamSung
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="/brand/xiaomi">
                    <FontAwesomeIcon icon={ faDiceD6 } ></FontAwesomeIcon>
                    {" "}
                    Xiaomi
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav>
            {/* <NavItem className="mr-4">
              <InputGroup className="input-search">
                <Input />
                <InputGroupAddon addonType="append">
                  <Button color="primary">
                    <Link to="/search">
                      <FontAwesomeIcon icon={ faSearch } ></FontAwesomeIcon>
                    </Link>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </NavItem>
            <NavItem>
              <Link to="/sale" className="nav-link">
                <FontAwesomeIcon icon={ faTags } ></FontAwesomeIcon>
                {" "}
                Săn sale
              </Link>
            </NavItem>
             */}
            <NavItem>
              <Button>
                <Link to="/cart">
                  <FontAwesomeIcon icon={ faShoppingCart } ></FontAwesomeIcon>
                  {" "}
                  Giỏ hàng
                </Link>
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComp;