import "./CoverPage.scss";
import React from "react";
import Carousel from 'react-bootstrap/Carousel'

export const CoverPage = () => {
    return (
        <div className="carousel-img">
        <Carousel fade controls={false} indicators={false} className="carousel-img">
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src="./images/CoverPage1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/CoverPage2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/CoverPage3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}