import "./Footer.scss";
import React from "react";
import FooterLogo from "../../assets/images/thedukerey-logo-footer.svg"

export const Footer = () => {
    return (

        <footer>
            <div id="footer">
                <div className="footer-img">
                    <img
                        className="d-block w-100 "
                        src={FooterLogo}
                        alt="First slide"
                    />
                </div>
                <div className="footer-text">
                    <p className="footer-text-line1"> Miami Beach.</p>
                    <p className="footer-text-line2">786-553-2884 / 786-250-7595</p>
                    <p className="footer-text-line3">dukecleaningmiami@gmail.com</p>
                </div>
            </div>
        </footer>

    );
}