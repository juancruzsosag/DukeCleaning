import "./Footer.scss";
import React from "react";

export const Footer = () => {
    return (

        <footer>
            <div id="footer">
                <div className="footer-img">
                    <img
                        className="d-block w-100 "
                        src="./images/thedukerey-logo-footer.svg"
                        alt="First slide"
                    />
                </div>
                <div className="footer-text">
                    <p className="footer-text-line1"> Miami Beach.</p>
                    <p className="footer-text-line2">786-553-2884 / 786250-7595</p>
                    <p className="footer-text-line3">dukecleaningmiami@gmail.com</p>
                </div>
            </div>
        </footer>

    );
}