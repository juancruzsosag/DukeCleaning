import "./CoverPage.css";
import React from "react";
import Carousel from 'react-bootstrap/Carousel'

export const CoverPage = () => {
    return (
        <Carousel fade controls={false} indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src="./images/CoverPage1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src="./images/CoverPage2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src="./images/CoverPage3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}