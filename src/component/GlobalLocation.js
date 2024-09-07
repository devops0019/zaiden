import React, {useEffect} from "react";
import {gsap, Power1} from "gsap"
import {ImageDraggable} from "./ImageDraggable"

export const GlobalLocation = () => {

    useEffect(() => {
        gsap.set(".global-title-wrapper", {
            autoAlpha: 0
        })
        gsap.set(".image-draggable-wrapper", {
            autoAlpha: 0
        })
        gsap.to(".global-title-wrapper", {
            autoAlpha: 1,
            ease: Power1.easeInOut,
            scrollTrigger: {
              trigger: ".global-location",
              start: "top bottom", // the default values
              end: "bottom bottom",
              scrub: true,
            },
        });

        gsap.to(".image-draggable-wrapper", {
            autoAlpha: 1,
            ease: Power1.easeInOut,
            scrollTrigger: {
              trigger: ".global-location",
              start: "top bottom", // the default values
              end: "bottom bottom",
              scrub: true,
            },
        });
    }, [])

    return (
        <section className="global-location full-height" id="global-location">
            <div className="main-container">
                <div className="sparkles left-top-sparkle" data-value="-5"></div>
                <div className="sparkles right-mid-sparkle" data-value="5"></div>
                <div className="global-title-wrapper">
                    <h2 className="section-title global-title">GLOBALLY LOVED <br/>LOCATION</h2>
                    <p className="section-description">Andheri is a globally accepted residential landmark. It is a central point that connects the whole city. <br/><strong>ROSWALT ZAIDEN</strong> is situated at one such location where lifestyle, community and serenity harmonizes. Andheri is the most desirable residential address one seeks for the city.</p>
                </div>
                <ImageDraggable />
            </div>
        </section>
    )
}