import React from "react";
import {ImageDraggable} from "./ImageDraggable"

export const GlobalLocation = () => {
    return (
        <section className="global-location full-height">
            <div className="logo-bg"></div>
            <div className="main-container">
                <div className="global-title-wrapper">
                    <h2 className="section-title">GLOBALLY LOVED <br/>LOCATION</h2>
                    <p className="section-description">Andheri is a globally accepted residential landmark. It is a central point that connects the whole city. <br/><strong>Roswalt Zaiden</strong> located at  very convenient, connected and offers exemplery lifestyle. Andheri is the most desirable residential address one seeks for the city.</p>
                </div>
                <ImageDraggable />
            </div>
        </section>
    )
}