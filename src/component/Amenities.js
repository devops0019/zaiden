import React, {useState, useEffect} from "react";
import {Navigation, Pagination, Controller, EffectFade} from "swiper"
import {gsap} from "gsap"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Amenities = () => {

    useEffect(() => {
        gsap.to(".amenities-carousel-right", {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: ".amenities",
              // start: "top bottom", // the default values
              // end: "bottom top",
              scrub: true,
              markers: true
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
              markers: true
            },
        });
    }, [])

    return (
        <section className="amenities" id="amenities">
            <div className="sparkles left-mid-sparkle"></div>
            <h2 className="section-title">AMENITIES</h2>
            <div className="amenities-carousel-wrapper">
                <div className="amenities-carousel-left">
                    <Swiper
                        modules={[Navigation,Pagination, Controller]}
                        pagination={{clickable: false, type: "fraction"}}
                        loop={true}
                        navigation
                    >
                        <SwiperSlide>
                            <h2 className="slider-title">INDULGENCE</h2>
                            <p className="slider-description">Let us lead you on a journey to <strong>“Rediscover Yourself”</strong> with our wide range of wellness amenities.</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2 className="slider-title">KIDS ZONE</h2>
                            <p className="slider-description">We offer a quintessential playground for your kids to learn, grow and get inspired at. Let the kids play the day away.</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2 className="slider-title">ELDERLY</h2>
                            <p className="slider-description">Unfolding a wide range of amenities for your parents to immerse into and relax their mind, body and soul.</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2 className="slider-title">CELEB LIFE</h2>
                            <p className="slider-description">Your connoisserial living deserves everything majestic! Find unlimited entertainment at your fingertips with your life at Roswalt Zaiden</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2 className="slider-title">AMENITY RICH</h2>
                            <p className="slider-description">Thoughtfully created amenities, elevate your spirit; Take a plunge into the aisles of high-end entertainment expanse.</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="amenities-carousel-right">
                    <Swiper
                        modules={[Controller]}
                    >
                        <SwiperSlide>
                            <img src="images/indulgence.jpg" alt="Indulgence" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="images/indulgence.jpg" alt="Indulgence" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="images/indulgence.jpg" alt="Indulgence" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="images/indulgence.jpg" alt="Indulgence" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="images/indulgence.jpg" alt="Indulgence" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}