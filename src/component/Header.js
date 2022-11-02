import React from "react";

export const Header = () => {
    return (
        <header className="header">
            <div className="main-container">
                <div className="header-wrapper">
                    <nav className="header-nav">
                        <ul className="nav-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Amenities</a></li>
                            <li><a href="#">Floor Plan</a></li>
                            <li><a href="#">Location</a></li>
                        </ul>
                    </nav>
                    <div className="download-brochure">
                        <a href="#">Download brochure</a>
                    </div>
                </div>
            </div>
        </header>
    )
}