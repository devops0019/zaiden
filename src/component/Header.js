import React, {useEffect} from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Header = () => {

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    useEffect(() => {
        document.querySelectorAll(".nav-list li a").forEach((btn, idx) => {
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
                    <nav className="header-nav">
                        <ul className="nav-list">
                            <li><a href="#masthead">Home</a></li>
                            <li><a href="#amenities">Amenities</a></li>
                            <li><a href="#floorplan">Floor Plans</a></li>
                            <li><a href="#location">Location</a></li>
                        </ul>
                    </nav>
                    <div className="header-logo">
                        <a href="#masthead">
                            <img src="images/headerlogo.png" alt="Roswalt Zaiden" />
                        </a>
                    </div>
                    <div className="download-brochure">
                        <a href="#">Download brochure</a>
                    </div>
                </div>
            </div>
        </header>
    )
}