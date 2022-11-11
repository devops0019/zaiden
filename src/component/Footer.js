import React from "react";

export const Footer = ({setCommonFormState}) => {
    return (
        <footer className="footer">
            <div className="main-container">
                <div className="footer-wrapper">
                    <div className="footer-upper-wrapper">
                        <div className="footer-left">
                            <p>Contact: <a href="tel:+917507070707">7507070707</a></p>
                            <p>Email: <a href="mailto:info@roswalt.com">info@roswalt.com</a></p>
                            <p>Address: 903, Naman Centre, G Block, Bandra Kurla Complex, Mumbai - 400051.</p>
                        </div>
                        <div className="footer-right">
                            <button type="button" onClick={() => {setCommonFormState(true)}}><span><img src="images/download.svg" alt="Download brochure" /></span><span className="mobile-hide">Download brochure</span></button>
                        </div>
                    </div>
                    <div className="footer-lower-wrapper">
                        <div className="footer-copy-wrapper">
                            <p>&copy; {new Date().getFullYear()} Roswalt Realty</p>
                            <ul className="social-icons-list">
                                <li>
                                    <a href="https://www.facebook.com/roswaltrealty" rel="noreferrer" target="_blank">
                                        <img src="images/facebook.svg" alt="Facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/roswaltrealty_mumbai" rel="noreferrer" target="_blank">
                                        <img src="images/instagram.svg" alt="Instagram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h2 className="footer-title">ROSWALT ZAIDEN</h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}