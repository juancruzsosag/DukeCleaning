import "./Header.scss";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Container, Nav, Row, Col } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar>
      <Container fluid className="navbar-header">
        <Row>
          <Col  className=" display-none" style={{
          backgroundColor: 'red',
        }}></Col>
          <Col  className="header-img" style={{
          backgroundColor: 'green',
        }}>
            <Nav>
              <Navbar.Brand href="#home">
                <img src="./images/thedukerey-logo.svg" alt="" srcset="" />
              </Navbar.Brand>
            </Nav>
          </Col>
          <Col  className="display-none" style={{
          backgroundColor: 'yellow',
        }}>
            <Nav>
              <Nav.Link href="#action1">
                <Button className="navbar-wpbutton">
                  <span className="whatsapp-logo">
                    <IoLogoWhatsapp />
                  </span>{"  "}
                  WhatsApp
                </Button>
              </Nav.Link>
              <Nav.Link href="#action1">
                <Button className="navbar-callbutton">
                  <span className="call-logo">
                    <IoCall />
                  </span>{"  "}
                  Call us
                </Button>
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
