import React, {useEffect} from "react";
import {gsap, Power1} from "gsap"

export const LiveCelebLife = () => {

    useEffect(() => {
        if(window.innerWidth > 780){
            gsap.to(".left-celeb-life", {
                yPercent: -40,
                ease: Power1.easeInOut,
                scrollTrigger: {
                    trigger: ".celeblife-wrapper",
                    //start: "top 90%",
                    scrub: true,
                }
            });
    
            gsap.to(".right-celeb-life", {
                yPercent: 20,
                ease: Power1.easeInOut,
                scrollTrigger: {
                    trigger: ".celeblife-wrapper",
                    //start: "top 50%",
                    scrub: true,
                }
            })
        }        
    }, [])

    return (
        <section className="celeb-life full-height">
            <div className="celeblife-wrapper">
                <div className="left-celeb-life"></div>
                <div className="right-celeb-life">
                    <div className="temp-sparkle twinkle"><img src="images/temp-sparkle.png" alt="sparkle" /></div>
                    <div className="right-celeb-life-wrapper">
                        <h2 className="section-title">
                            <span className="title-gold line1">LIVE A</span>
                            <p className="title-gold">
                                {/* <span className="temp-sparkle1 twinkle"><img src="images/temp-sparkle.png" alt="sparkle" /></span> */}
                                <span className="celeb-sparkle1"><img src="images/celebsparkle.png" alt="Celeb sparkle" /></span>
                                CELEB<span className="celeb-sparkle2"><img src="images/celebsparkle1.png" alt="Celeb sparkle" /></span>
                                {/* <span className="temp-sparkle2 twinkle"><img src="images/temp-sparkle.png" alt="sparkle" /></span> */}
                            </p>
                            <span className="title-gold line2">LIFE.</span>
                        </h2>
                        <span className="section-subtitle">GO BEYOND ORDINARY.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}