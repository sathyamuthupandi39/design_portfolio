import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import two from "../logos/002-linkedin.png";
import one from "../logos/001-gmail.png";
import three from "../logos/003-behance.png";
import four from "../logos/004-dribbble.png";
import five from "../logos/005-instagram.png";

function Footer() {
  return (
    <footer className="foot">
      <Container fluid={true}>
        <Row className="p-1 ">
          <Col>CONTACT ME :</Col>
        </Row>
        <Row className="pl-1 pb-1   ">
          <Col className="clickk">
            Click to copy email-id onto clipboard :
            <button
              className="butt"
              onClick={() =>
                navigator.clipboard.writeText("sadhanalokesh1999@gmail.com")
              }
            >
              {" "}
              <img className="gmail" src={one} />
            </button>
          </Col>
        </Row>
        <Row className="p-1">
          <Col>
            <a
              href="https://www.linkedin.com/in/sadhana-l-a4087214b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={two} />
            </a>{" "}
          </Col>
          <Col>
            <a
              href="https://www.behance.net/sadhanalokesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={three} />
            </a>
          </Col>
          <Col>
            <a
              href=" https://dribbble.com/sadhu12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={four} />
            </a>
          </Col>
          <Col>
            <a
              href="https://www.instagram.com/sadhanalokesh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={five} />
            </a>
          </Col>
        </Row>
        <Row className="p-1">
          <Col>Made using React and Bootstrap</Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
