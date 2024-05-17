import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroImage=()=>{
 
    return (
      <Container className="cont-margin">
        <Row className="row">
          <Col>
            <h3 className="hero-img-h3">VEGGIE SUPPER MARKET</h3>
            <h1 className="hero-img-h1">it’s Organic</h1>
            <h6 className="hero-img-h6">
              The organic veggies and fruits from worlds finest frams
            </h6>
          </Col>
          <Col>
            <img className="hero-banner" src="images/kiwi.png" alt="banner" />
          </Col>
        </Row>
      </Container>
    );
  }
export default HeroImage;
