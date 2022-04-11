import "./Header.scss";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { RiWhatsappFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { Row, Col } from "react-bootstrap";

export const Header = () => {
  return (
    <div className="header" id="Header">
      <div className="py-3 mx-0" id="container">
        <Row>
          <Col className="display-none"></Col>
          <Col>
            <Navbar.Brand
              className="d-flex flex-row justify-content-center align-items-center"
              href="#"
            >
              <img alt="duke-logo" src="./images/thedukerey-logo.svg" />
            </Navbar.Brand>
          </Col>
          <Col className="display-none">
            <div className="d-flex flex-row justify-content-end align-items-center">
              <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=542613733585" alt="Button redirects to Whatsapp">
                <Button className="header-wpbutton me-1">
                  <div className="whatsapp-logo  button-content">
                    <RiWhatsappFill /> WhatsApp
                  </div>
                </Button>
              </a>
              <a href="tel:+576015000000" data-rel="external" alt="Button redirects to call">
                <Button className="header-callbutton">
                  <div className="button-content">
                    <IoCall /> Call us
                  </div>
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
