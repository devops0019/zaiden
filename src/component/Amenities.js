import React, {useEffect, useState} from "react";
import {Navigation, Pagination, Controller, EffectFade, Autoplay} from "swiper"
import {gsap, Power1} from "gsap"
import {Swiper, SwiperSlide} from "swiper/react"
import {AmenitiesDetails} from "./AmenitiesDetails"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export const Amenities = () => {

    let [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        /* gsap.to(".amenities-carousel-right", {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: ".amenities",
              // start: "top bottom", // the default values
              // end: "bottom top",
              scrub: true,
            },
        });

        gsap.to(".amenities .section-title", {
            yPercent: -40,
            ease: "none",
            scrollTrigger: {
              trigger: ".amenities",
              // start: "top bottom", // the default values
              // end: "bottom top",
              scrub: true,
            },
        }); */

        gsap.set(".kidszone, .elderly", {
            yPercent: 40
        })

        gsap.to(".indulgence", {
            yPercent: -20,
            ease: Power1.easeInOut,
            scrollTrigger: {
                trigger: ".amenities",
                start: "top 90%",
                scrub: true
            }
        });
        gsap.to(".kidszone", {
            yPercent: -40,
            ease: Power1.easeInOut,
            scrollTrigger: {
                trigger: ".amenities",
                start: "top 90%",
                scrub: true
            }
        })
        gsap.to(".elderly", {
            yPercent: -20,
            ease: Power1.easeInOut,
            scrollTrigger: {
                trigger: ".amenities",
                start: "top 90%",
                scrub: true
            }
        })

    }, [])

    return (
        <section className="amenities" id="amenities">
            <div className={`amenities-details ${showDetails ? 'show-details': ''}`}>
                <AmenitiesDetails setShowDetails={setShowDetails} />
            </div>
            <div className="sparkles left-mid-sparkle"></div>
            <h2 className="section-title">AMENITIES</h2>
            <div className="amenities-carousel-wrapper">
                <div className="amenities-carousel-left desktop-hide">
                    <Swiper
                        modules={[Navigation,Pagination, Controller, EffectFade, Autoplay]}
                        pagination={{clickable: false, type: "fraction"}}
                        loop={true}
                        navigation
                        effect="fade"
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <div className="amenities-left-content">
                                <h2 className="slider-title">INDULGENCE</h2>
                                <p className="slider-description">Let us lead you on a journey to <strong>“Rediscover Yourself”</strong> with our wide range of wellness amenities.</p>
                            </div>
                            <div className="amenities-right-image"><img src="images/amenities/indulgence.jpg" alt="Indulgence" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="amenities-left-content">
                                <h2 className="slider-title">KIDS ZONE</h2>
                                <p className="slider-description">We offer a quintessential playground for your kids to learn, grow and get inspired at. Let the kids play the day away.</p>
                            </div>
                            <div className="amenities-right-image"><img src="images/amenities/kids-zone.jpg" alt="Kids Zone" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="amenities-left-content">
                                <h2 className="slider-title">ELDERLY</h2>
                                <p className="slider-description">Unfolding a wide range of amenities for your parents to immerse into and relax their mind, body and soul.</p>
                            </div>
                            <div className="amenities-right-image"><img src="images/amenities/elderly.jpg" alt="Elderly" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="amenities-left-content">
                                <h2 className="slider-title">CELEB LIFE</h2>
                                <p className="slider-description">Your connoisserial living deserves everything majestic! Find unlimited entertainment at your fingertips with your life at ROSWALT ZAIDEN</p>
                            </div>
                            <div className="amenities-right-image"><img src="images/amenities/celeblife.jpg" alt="Celeb Life" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="amenities-left-content">
                                <h2 className="slider-title">AMENITY RICH</h2>
                                <p className="slider-description">Thoughtfully created amenities, elevate your spirit; Take a plunge into the aisles of high-end entertainment expanse.</p>
                            </div>
                            <div className="amenities-right-image"><img src="images/amenities/amenity-rich.jpg" alt="Amenity Rich" /></div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="amenities-desktop-wrapper mobile-hide" onClick={() => setShowDetails(true)}>
                    <div className="amenities-block kidszone">
                        <p>Kids Zone</p>
                    </div>
                    <div className="amenities-block indulgence" onClick={() => setShowDetails(true)}>
                        <p>Indulgence</p>
                    </div>
                    <div className="amenities-block elderly" onClick={() => setShowDetails(true)}>
                        <p>Elderly</p>
                    </div>
                </div>
            </div>
        </section>
    )
}