import React, {useRef, useEffect} from "react";
import {gsap, Power1} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export const Masthead = () => {

    const movableRect = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        gsap.timeline({
            scrollTrigger:{
                trigger: ".elevation-wrapper",
                pin: ".elevation-wrapper",
                start: "top 20%",
                end: "top 80%",
                scrub: 2,
            }
        }).fromTo(".gold-logo", {
            autoAlpha: 1
        }, {
            autoAlpha: 0
        }).fromTo(".masthead-title", {
            autoAlpha: 1
        }, {
            autoAlpha: 0
        }).fromTo(".elevation-wrapper img", {
            scale: 1,
            ease: Power1.easeIn
        },{
            scale: 3.175,
            ease: Power1.easeIn
        });

        /* const movableElementsWrapper = movableRect.current;
        const speed = 0.35;
        const items = gsap.utils.toArray(movableElementsWrapper.children).map(element => {
            return {
              element,
              shiftValue: element.getAttribute("data-value") / 400,
              xSet: gsap.quickSetter(element, "x", "px"),
              ySet: gsap.quickSetter(element, "y", "px"),
            }
        });
        const mouse = {
            x: 0,
            y: 0
        };
        const mouseMoveHandler = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };
        movableElementsWrapper.onmousemove = mouseMoveHandler;
        gsap.ticker.add(() => {
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

            items.forEach(item => {
              item.xSet(item.shiftValue * mouse.x * dt);
              item.ySet(item.shiftValue * mouse.y * dt);
            });
        }); */

        /* gsap.fromTo(".elevation-wrapper img",
        {
            scale: 1,
        },
        {
            duration: 5,
            scale: 3.2,
            maxWidth: window.innerWidth,
            ease: "none",
            force3D: true,
            scrollTrigger: {
                pin: ".elevation-wrapper",
                trigger: ".elevation-wrapper",
                start: "top 20%",
                end: "top 80%",
                scrub: 0.5,
                markers: true
            }
        })

        gsap.fromTo(".gold-logo", {
            opacity: 1
        }, {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".elevation-wrapper",
                start: "top 20%",
                end: "top 80%",
                scrub: 0.5,
                markers: true
            }
        })

        gsap.fromTo(".masthead-title", {
            opacity: 1
        }, {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".elevation-wrapper",
                start: "top 20%",
                end: "top 80%",
                scrub: 0.5,
                markers: true
            }
        }) */
    }, [])


    return (
        <section className="masthead" id="masthead">
            <div className="main-container">
                <div className="masthead-wrapper" ref={movableRect}>
                    <div className="sparkles left-top-sparkle" data-value="-5"></div>
                    <div className="sparkles right-mid-sparkle" data-value="5"></div>
                    <div className="sparkles right-mid-sparkle-big" data-value="5"></div>
                    <div className="gold-logo" data-value="8">
                        <div className="twinkle left-top-twinkle">
                            <img src="images/temp-sparkle.png" alt="Sparkle" />
                        </div>
                        <img src="images/goldlogo.png" alt="Roswalt Zaiden" />
                        <div className="twinkle left-bottom-twinkle">
                            <img src="images/temp-sparkle.png" alt="Sparkle" />
                        </div>
                    </div>
                    <div className="elevation-wrapper" data-value="-15">
                        <img src="images/mainelevation.jpg" alt="Main elevation" />
                    </div>
                    <h1 className="masthead-title" data-value="-5">ROSWALT ZAIDEN</h1>
                </div>
            </div>
        </section>
    )
}