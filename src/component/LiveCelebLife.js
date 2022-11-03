import React, {useEffect} from "react";
import {gsap, Power1} from "gsap"

export const LiveCelebLife = () => {

    useEffect(() => {
        gsap.to(".title-gold", {
            xPercent: 0,
            scrollTrigger: {
                trigger: "celeblife-wrapper",
            }
        })
    }, [])

    return (
        <section className="celeb-life full-height">
            <div className="celeblife-wrapper">
                <div className="left-celeb-life"></div>
                <div className="right-celeb-life">
                    <div className="sparkles right-mid-sparkle"></div>
                    <div className="sparkles right-mid-sparkle-big"></div>
                    <div className="temp-sparkle twinkle"><img src="images/temp-sparkle.png" alt="sparkle" /></div>
                    <div className="right-celeb-life-wrapper">
                        <h2 className="section-title">
                            <span className="title-normal line1">LIVE A</span>
                            <p className="title-gold">
                                <span className="temp-sparkle1 twinkle"><img src="images/temp-sparkle.png" alt="sparkle" /></span>
                                <span className="celeb-sparkle1"><img src="images/celebsparkle.png" alt="Celeb sparkle" /></span>
                                CELEB<span className="celeb-sparkle2"><img src="images/celebsparkle1.png" alt="Celeb sparkle" /></span>
                                <span className="temp-sparkle2 twinkle"><img src="images/temp-sparkle.png" alt="sparkle" /></span>
                            </p>
                            <span className="title-normal line2">LIFE.</span>
                        </h2>
                        <span className="section-subtitle">Go Beyond Ordinary.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}