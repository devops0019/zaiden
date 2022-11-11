import React, {useEffect, useState} from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Header = ({setCommonFormState}) => {

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    let [isActive, setIsActive] = useState(false)

    useEffect(() => {
        document.querySelectorAll(".nav-list li a, .header-logo a").forEach((btn, idx) => {
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
                                <li><a href="#masthead" onClick={() => setIsActive(false)}>Home</a></li>
                                <li><a href="#amenities" onClick={() => setIsActive(false)}>Amenities</a></li>
                                <li><a href="#floorplan" onClick={() => setIsActive(false)}>Floor Plans</a></li>
                                <li><a href="#location" onClick={() => setIsActive(false)}>Location</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="header-logo">
                        <a href="#masthead" onClick={() => setIsActive(false)}>
                            <img src="images/headerlogo.png" alt="Roswalt Zaiden" />
                        </a>
                    </div>
                    <div className="download-brochure">
                        <button type="button" onClick={() => {setCommonFormState(true)}}><span><img src="images/download.svg" alt="Download brochure" /></span><span className="mobile-hide">Download brochure</span></button>
                    </div>
                </div>
            </div>
        </header>
    )
}