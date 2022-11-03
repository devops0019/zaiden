import React from "react";
import {Navigation, Pagination, Controller} from "swiper"
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"


export const FloorPlans = () => {
    return (
        <section className="floor-plans full-height" id="floorplan">
            <div className="floor-plans-wrapper">
                <h2 className="section-title">FLOOR PLANS</h2>
                <Swiper
                    modules={[Navigation, Pagination, Controller]}
                    pagination={{clickable: false, type: "fraction"}}
                    loop={true}
                    navigation
                    autoplay={true}
                >
                    <SwiperSlide>
                        <img src="images/floorplans/floorplan.png" alt="Floor Plan 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/floorplans/unitplan1.png" alt="Unit Plan 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/floorplans/unitplan2.png" alt="Unit Plan 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/floorplans/unitplan3.png" alt="Unit Plan 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/floorplans/unitplan4.png" alt="Unit Plan 4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/floorplans/unitplan5.png" alt="Unit Plan 5" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}