import React, { Component, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Store from "../store/Store";

const ShopNowCont= ( )=> {
    const[shopItems,setShopItems] =useState(false);
    const navigate = useNavigate();
    const handleOpen = ()=>{
        setShopItems(true);
        navigate("/shop")

    }
    return (
      <div className="cont-margin shop-now-cont">
        <Container className="cont-pd">
          <Row className="row ">
            <Col>
              <img className="" src="images/veg_rack.png" alt="rack" />
            </Col>
            <Col className="p-6">
              <h1 className="shop-now-h1">Why Fruit bazaar?</h1>
              <p className="shop-now-p mt-4">
                We shorten the time between the farm and your table. Our motto
                is to deliver the local food which is better, fresher and
                tastier. The wholesale prices that farmers get for their
                products are low, often near the cost of production. It is an
                investment in the future. By supporting local farmers today, we
                are helping to ensure that there will be farms in our community
                tomorrow!
              </p>
              <p className="shop-now-p">
                We have 6 points quality control system that ensures that each
                piece of fruits and vegetables should match Grade A Quality. Our
                Logistics chain ensure each fruits and vegetables reaches your
                doorsteps within 24 hours of plucking and harvesting.
              </p>
              <Link to="/shop">
                <Button className="shop-now-button mt-4" onClick={handleOpen}>PURCHASE NOW</Button>
                {/* {shopItems && <Store />} */}
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
export default ShopNowCont;
