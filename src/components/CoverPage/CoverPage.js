import "./CoverPage.scss";
import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import CoverPage1 from "../../assets/images/CoverPage1.jpg"
import CoverPage2 from "../../assets/images/CoverPage2.jpg"
import CoverPage3 from "../../assets/images/CoverPage3.jpg"


export const CoverPage = () => {
    return (
        <div className="carousel-img">
        <Carousel fade controls={false} indicators={false} className="carousel-img">
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={CoverPage1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CoverPage2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CoverPage3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}