import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWaterLadder,
    faPersonRunning,
    faDumbbell,
    faBasketball,
    faDice,
    faBook,
    faMedkit,
    faStar,
    faTelevision,
    faMugHot,
    faHouse,
    faUmbrellaBeach,
    faHandshake,
    faLayerGroup,
    faRightFromBracket
} from "@fortawesome/free-solid-svg-icons"

export const AmenitiesDetails = ({setShowDetails}) => {
    return (
        <div className="amenities-details-wrapper">
            <div className="main-container">
                <FontAwesomeIcon icon={faRightFromBracket} className="close-details" fontSize={30} onClick={() => setShowDetails(false)} />
                <div className="amenities-details-inner">
                    <div className="image-text-wrapper">
                        <div className="image-wrapper">
                            <img src="images/amenities/indulgence.jpg" alt="Indulgence" />
                        </div>
                        <div className="text-wrapper">
                            <h3>Indulgence</h3>
                            <p>Let us lead you on a journey to rediscover yourself with our wide range of amenities.</p>
                            <ul className="icons-list">
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faWaterLadder} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Swimming Pool
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faPersonRunning} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Jogging track
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faDumbbell} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Gymnasium
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="image-text-wrapper flex-reverse">
                        <div className="image-wrapper">
                            <img src="images/amenities/kids-zone.jpg" alt="Kid's Zone" />
                        </div>
                        <div className="text-wrapper">
                            <h3>Kid's Zone</h3>
                            <p>We offer a quintessential playground for your kids to learn, grow and get inspired at. Let the kids play the day away.</p>
                            <ul className="icons-list">
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faWaterLadder} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Kid's Swimming Pool
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faBasketball} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Basketball Court
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faDice} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Indoor Games
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="image-text-wrapper">
                        <div className="image-wrapper">
                            <img src="images/amenities/elderly.jpg" alt="Elderly" />
                        </div>
                        <div className="text-wrapper">
                            <h3>Elderly</h3>
                            <p>Unfolding a wide range of amenities for your parents to immerse into and relax their mind, body and soul.</p>
                            <ul className="icons-list">
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faBook} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Library
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faMedkit} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Medical Room
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Star Gazing
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="image-text-wrapper flex-reverse">
                        <div className="image-wrapper">
                            <img src="images/amenities/celeblife.jpg" alt="Celeb Life" />
                        </div>
                        <div className="text-wrapper">
                            <h3>Celeb Life</h3>
                            <p>Your connoisseurial living deserves everything majestic! Find unlimited entertainment at your fingertips with your life at ROSWALT ZAIDEN.</p>
                            <ul className="icons-list">
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faTelevision} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Mini Theatre
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faMugHot} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Cafe
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faHouse} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Banquet Hall
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="image-text-wrapper">
                        <div className="image-wrapper">
                            <img src="images/amenities/amenity-rich.jpg" alt="Amenity Rich" />
                        </div>
                        <div className="text-wrapper">
                            <h3>Amenity Rich</h3>
                            <p>Thoughtfully created amenities, elevate your spirit; Take a plunge into the aisles of high-end entertainment expanse.</p>
                            <ul className="icons-list">
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faUmbrellaBeach} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Viewing Deck
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faHandshake} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Conference Room
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faLayerGroup} fontSize={27} className="amenities-icon" />
                                    </span>
                                    <p>
                                        Stack parking
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}