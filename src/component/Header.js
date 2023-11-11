import React, {useEffect, useState} from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const Header = ({setCommonFormState, setDownloadReq}) => {

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    let [isActive, setIsActive] = useState(false)

    useEffect(() => {
        document.querySelectorAll(".local-links, .header-logo a").forEach((btn, idx) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelectorAll(".nav-list li a").forEach((i,k) => {
                    i.classList.remove('active');
                })
                btn.classList.add('active');
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: `${btn.getAttribute('href')}`,
                        offsetY: 100
                    }
                })
            })
        })
    }, [])


    return (
        <header className="header">
            <div className="main-container">
                <div className="header-wrapper">
                <div className="three desktop-hide">
                    <div className={`hamburger ${isActive ? 'is-active' : ''}`} id="hamburger-1" onClick={() => setIsActive(!isActive)}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
                    <nav className="header-nav">
                        <div className={`nav-wrapper ${isActive ? 'is-active' : ''}`}>
                            <ul className="nav-list">
                                <li><a href="/#masthead" onClick={() => setIsActive(false)} className="local-links">Home</a></li>
                                <li><a href="https://www.roswalt.com/about.php">About</a></li>
                                <li><a href="/#amenities" onClick={() => setIsActive(false)} className="local-links">Amenities</a></li>
                                <li><a href="/#location" onClick={() => setIsActive(false)} className="local-links">Location</a></li>
                                <li><a href="https://roswaltzaiden.com/rera.pdf" target="_blank">RERA</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="header-logo">
                        <a href="#masthead" onClick={() => setIsActive(false)}>
                            <img src="images/headerlogo.png" alt="Roswalt Zaiden" />
                        </a>
                    </div>
                    <div className="download-brochure">
                        <button type="button" onClick={() => {setCommonFormState(true); setDownloadReq(true)}}><span><FontAwesomeIcon icon={faDownload} /></span><span className="mobile-hide">Download brochure</span></button>
                    </div>
                </div>
            </div>
        </header>
    )
}