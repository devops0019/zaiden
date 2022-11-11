import React from "react";

export const GetInTouchBtn = ({setCommonFormState}) => {
    return (
        <button className="get-in-touch-btn" onClick={() => setCommonFormState(true)}><span className="call-icon"></span><span className="call-text">Get in touch</span></button>
    )
}