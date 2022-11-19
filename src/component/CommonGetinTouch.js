import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {getAuthToken} from "../utils"

export const CommonGetinTouch = ({commonFormState, setCommonFormState}) => {

    return(
        <div className={`form-overlay ${commonFormState ? 'show' : 'hidden'}`}>
            <div className="get-in-touch">
                <button className="close-button" type="button" onClick={() => setCommonFormState(false)}>
                    <FontAwesomeIcon icon={faXmark} color="gray" fontSize={27} />
                </button>
                <div className="get-in-touch-wrapper">
                    <h3 className="git-title">Get In touch</h3>
                    <form>
                        <fieldset className="form-fieldset">
                            <input type="text" placeholder="Name*" className="input-text" required />
                            <span className="validation-error"></span>
                        </fieldset>
                        <fieldset className="form-fieldset">
                            <input type="text" placeholder="Number*" className="input-text" required />
                            <span className="validation-error"></span>
                        </fieldset>
                        <fieldset className="form-fieldset">
                            <input type="text" placeholder="Email Id" className="input-text" />
                            <span className="validation-error"></span>
                        </fieldset>
                        <fieldset className="form-fieldset btn-fieldset">
                            <button className="submit-btn" onClick={() => getAuthToken()}>Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}