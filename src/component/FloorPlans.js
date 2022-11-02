import React from "react";
import {Navigation, Pagination, Controller} from "swiper"
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"

export const FloorPlans = () => {
    return (
        <section className="section full-height">
            <div className="floor-plans-wrapper">
                <h2 className="section-title">FLOOR PLANS</h2>
                <Swiper>
                    <SwiperSlide>
                        <img src="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}