import "./Header.scss";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { RiWhatsappFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { Row, Col } from "react-bootstrap";
import DukeLogo from "../../assets/images/thedukerey-logo.svg"

export const Header = () => {
  return (
    <div className="header" id="Header">
      <div className="py-3 mx-0" id="container">
        <Row>
          <Col className="mobile-display-none"></Col>
          <Col>
            <Navbar.Brand
              className="d-flex flex-row justify-content-center align-items-center"
              
            >
              <img alt="duke-logo" src={DukeLogo} />
            </Navbar.Brand>
          </Col>
          <Col className="mobile-display-none">
            <div className="d-flex flex-row justify-content-end align-items-center">
              <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=17865532884&text=Hello,%20Duke%20Rey%20Cleaning!%0AI%20want%20to%20get%20some%20information%20about…" alt="Button redirects to Whatsapp">
                <Button className="header-wpbutton me-1">
                  <div className="whatsapp-logo  button-content">
                    <RiWhatsappFill /> WhatsApp
                  </div>
                </Button>
              </a>
              <a href="el:17865532884" data-rel="external" alt="Button redirects to call">
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
