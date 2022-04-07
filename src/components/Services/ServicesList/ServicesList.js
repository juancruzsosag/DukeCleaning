import React from "react"; 
import SpecialDeepClean from "../../../assets/Services/specialdeepclean.svg";
import PressureClean from "../../../assets/Services/pressureclean.svg";
import Janitorial from "../../../assets/Services/janitorial.svg";
import CommercialDisinfection from "../../../assets/Services/disinfection.svg";
import WindowClean from "../../../assets/Services/windowclean.svg";
import PostRefurbishing from "../../../assets/Services/postrefurbishing.svg";
import { Col, Container, Row } from "react-bootstrap";
import { ServiceCard } from "../ServiceCard/ServiceCard";

export const ServicesList = () =>{
    //intentar pasar cada service como un objeto desde un js
    //cambiar a grid manual
    return(
        <div>
            <Container >
                <Row >
                    <Col> <ServiceCard title="Special Deep Cleaning" description="Special attention to details." img={SpecialDeepClean} /> </Col>
                    <Col> <ServiceCard title="Pressure Cleaning" description="Floors and front of the restaurant." img={PressureClean} /> </Col>
                    <Col> <ServiceCard title="Janitorial Services" description="We provide  professionalism and expertise to deliver exceptional results." img={Janitorial} /> </Col>
                </Row>
                <Row >
                    <Col> <ServiceCard title="Commercial Disinfection Services" description="We thoroughly clean and disinfect your facility." img={CommercialDisinfection} /> </Col>
                    <Col> <ServiceCard title="Commercial Window Cleaning" description="Shop window cleaning." img={WindowClean} /> </Col>
                    <Col> <ServiceCard title="Post Refurbishing Cleaning" description="Thorough dust removal from floors, ceilings, walls, A/C pipes, etc." img={PostRefurbishing} /> </Col>
                </Row>
            </Container>
        </div>
    );
}