import React from "react";

export const Location = () => {
    return (
        <section className="location full-height">
            <div className="map"></div>
            <div className="get-in-touch">
                <div className="get-in-touch-wrapper">
                    <h3 className="git-title">Get In touch</h3>
                    <form>
                        <fieldset className="form-fieldset">
                            <input type="text" placeholder="Name*" className="input-text" required />
                        </fieldset>
                        <fieldset className="form-fieldset">
                            <input type="text" placeholder="Number*" className="input-text" required />
                        </fieldset>
                        <fieldset className="form-fieldset">
                            <input type="text" placeholder="Email Id" className="input-text" />
                        </fieldset>
                        <fieldset className="form-fieldset btn-fieldset">
                            <button className="submit-btn">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
    )
}