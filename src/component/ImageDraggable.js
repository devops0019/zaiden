import React, {useRef, useEffect} from "react";
import {gsap} from "gsap";
import {Draggable} from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export const ImageDraggable = () => {
    const draggableRight = useRef();
    const imageWrapper = useRef();
    const dragger = useRef();
    let ratio = 0.5;
    useEffect(() => {
        /* const draggableRight = document.querySelector(".image-draggable-right");
        const imageWrapper = document.querySelector(".image-draggable-wrapper");
        const dragger = document.querySelector(".dragger"); */

        let onDrag = () => {
            const width = imageWrapper.current.getBoundingClientRect().width / 2;
            gsap.set(draggableRight.current, {clipPath: `inset(0px ${width - draggable.x}px 0px 0px)`});
            gsap.set(".west-view", {x: (draggable.x/2) + 12})
            gsap.set(".east-view", {x: (draggable.x/2) + 12})
            ratio = draggable.x/width;
        }
        const draggable = new Draggable(dragger.current, {
            type: "x",
            bounds: imageWrapper.current,
            onDrag: onDrag,
            onThrowUpdate: onDrag,
            throwResistance: 2000,
            inertia: true
        });
    },[])

    return (
        <div className="image-draggable-wrapper" ref={imageWrapper}>
            <div className="image-draggable-left">
                <p className="draggable-text east-view">EAST VIEW</p>
                <img src="images/eastview.webp" alt="East View" />
            </div>
            <div className="image-draggable-right" ref={draggableRight}>
                <p className="draggable-text west-view">WEST VIEW</p>
                <img src="images/westview.webp" alt="West View" />
            </div>
            <div className="dragger" ref={dragger}></div>
        </div>
    )
}