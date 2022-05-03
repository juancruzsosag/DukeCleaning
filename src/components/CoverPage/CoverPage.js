import "./CoverPage.scss";
import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import CoverPage1 from "../../assets/images/CoverPage1.jpg"
import CoverPage2 from "../../assets/images/CoverPage2.jpg"
import CoverPage3 from "../../assets/images/CoverPage3.jpg"
import CoverPage1Desk from "../../assets/images/CoverPage1-desktop.jpg"
import CoverPage2Desk from "../../assets/images/CoverPage2-desktop.jpg"
import CoverPage3Desk from "../../assets/images/CoverPage3-desktop.jpg"


export const CoverPage = () => {
    return (
        <div className="carousel-img">
        <Carousel fade controls={false} indicators={false} className="carousel-img">
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={screen.width>600 ? CoverPage1Desk : CoverPage1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={screen.width>600 ? CoverPage2Desk : CoverPage2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={screen.width>600 ? CoverPage3Desk : CoverPage3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}