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
                            <p>Address: A S Hightech, 16, Koteshwar Palace CHSL, Jeeva Mahale Road, Andheri (East), Mumbai - 400069.</p>
                            <p>RERA No: P51800047680</p>
                        </div>
                        <div className="footer-right">
                            <button type="button" onClick={() => {setCommonFormState(true)}}><span><img src="images/download.svg" alt="Download brochure" /></span><span className="mobile-hide">Download brochure</span></button>
                        </div>
                    </div>
                    <div className="footer-lower-wrapper">
                        <div className="footer-copy-wrapper">
                            <p>&copy; {new Date().getFullYear()} ROSWALT REALTY PVT. LTD.</p>
                            <ul className="social-icons-list">
                                <li className="facebook">
                                    <a href="https://www.facebook.com/roswaltrealty" rel="noreferrer" target="_blank">
                                        <img src="images/facebook.svg" alt="Facebook" />
                                    </a>
                                </li>
                                <li className="instagram">
                                    <a href="https://www.instagram.com/roswaltrealty_mumbai" rel="noreferrer" target="_blank">
                                        <img src="images/instagram.svg" alt="Instagram" />
                                    </a>
                                </li>
                                <li className="linkedin">
                                    <a href="https://www.linkedin.com/company/28707255/" rel="noreferrer" target="_blank">
                                        <img src="images/linkedin.svg" alt="LinkedIn" />
                                    </a>
                                </li>
                                <li className="youtube">
                                    <a href="https://www.youtube.com/channel/UCE5zUCQ5KCAf9LzLJYDWIeg" rel="noreferrer" target="_blank">
                                        <img src="images/youtube.svg" alt="Youtube" />
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