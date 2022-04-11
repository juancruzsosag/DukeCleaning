import "./AboutUs.scss";
import React from "react";



export const AboutUs = () => {

    const divStyle = {
        color: '#e8bd4f',

    };
    return (
        <div>
            <div id="aboutUs">
                <div className="aboutUs-title">
                    <h3>ABOUT <span style={divStyle}>US</span></h3>
                </div>
                <div className="aboutUs-text">
                    <p>With more than 20 years of experience in the Hospitality Industry and Restaurant Services,
                        our family business knows how important it is for your business to have  everything clean and
                        shiny, customized to your needs.</p>
                    <p> Due to our experience, dedication and passion for our work, we provide the best cleaning services in Miami.</p>
                </div>
            </div>
        </div>
    );
}




