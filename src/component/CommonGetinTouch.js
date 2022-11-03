import React, {useState} from "react";

export const CommonGetinTouch = () => {

    let [formState, closeFormState] = useState(false);

    return(
        <div className={`form-overlay ${formState ? 'show' : 'hidden'}`}>
            <div className="get-in-touch">
                <button className="close-button" onClick={() => closeFormState(false)}>
                    <svg height="36" viewBox="0 0 48 48" width="36" fill="#ffb400" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
                </button>
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
        </div>
    )
}