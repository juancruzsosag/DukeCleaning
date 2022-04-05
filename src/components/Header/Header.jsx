import "./Header.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { Container, Nav, Row, Col } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar>
      <Container  className="navbar-header">
        <Row>
          <Col className="display-none"></Col>
          <Col className="header-img">
            <Nav  >
              <Navbar.Brand  href="#home">
                <img src="./images/thedukerey-logo.svg" alt="" srcset="" />
              </Navbar.Brand>
            </Nav>
          </Col>
          <Col className="display-none">
            <Nav >
              <Nav.Link  href="#action1">
                <Button className="navbar-wpbutton">
                  <div className="whatsapp-logo"></div>WhatsApp
                </Button>
              </Nav.Link>
              <Nav.Link  href="#action1">
                <Button className="navbar-callbutton">Call us</Button>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>

    /*<div className="header">
            <div className="header-img">
            <img src="./images/thedukerey-logo.svg" alt="" srcset="" />
            </div>
            <div className="navbar-buttons"> 
            <Button className="navbar-wpbutton">WhatsApp</Button>
            <Button className="navbar-callbutton">Call us</Button>
            </div>
    </div>*/
  );
};
