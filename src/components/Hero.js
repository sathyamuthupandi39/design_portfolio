import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Hero(props) {
  return (
    <div>
      <Container fluid={true}>
        <Row className="justify-content-center pt-2">
          <Col md={12} sm={12}>
            {props.title && (
              <h1 className="display-5 font-weight-bold text-center">
                {props.title}
              </h1>
            )}
            {props.subTitle && (
              <p className="font-weight-normal text-center">{props.subTitle}</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
