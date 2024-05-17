import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const AboutUs =()=>  {
    return (
      <div>
        <Container className="cont-pd p-5 cont-margin mb-6">
          <Row className="row ">
            <Col>
              <img
                className="about-us-img"
                src="images/booklet.jpg"
                alt="book"
              />
            </Col>
            <Col className="">
              <h2 className="about-us-h2">About veggie</h2>
              <h1 className="shop-now-h1">Super market</h1>
              <p className="shop-now-p mt-4">
                We deliver fresh farm produce fruits and vegitables to our
                esteemed customers. Our team memebrers are farm and horticulture
                experts, who helps us to choose the best quality products from
                the farmer’s house accorss the country.
              </p>

              <Button className="shop-now-button mt-4">Read More</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
};
export default AboutUs;
