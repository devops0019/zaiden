import React, {useRef, useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { CaptchaField } from "./CommonGetinTouch";

export const Location = () => {

    let [formValid, setFormValid] = useState(false);
    let [successMsg, showSuccessMsg] = useState(false);
    let [inProcess, setInProcess] = useState(false);

    const navigate = useNavigate();

    const submitFormData = (formData) => {
        setInProcess(true);
        const HOST = "https://zapi-devops0019.vercel.app";
        const FORMDATAURL = `${HOST}/createlead`;

        axios.post(FORMDATAURL, formData, {
            headers: {
                Authorization: "Bearer tYFSaXhtSZF6AdjjqCnvvtoC"
            }
        }).then(res => {
            let message = res.data.message;
            if(res.status === 200 && message === "Lead Created Successfully"){
                showSuccessMsg(true);
                setInProcess(false);
                navigate('/thank-you');
            }else{
                console.error("Lead not captured");
            }
        }).finally(() => {
            window._tfa?.push({notify: 'event', name: 'lead', id: 1771195});
            console.log("Lead event captured")
        })
    }

    const name = useRef();
    const phone = useRef();
    const email = useRef();
    const isAgree = useRef();

    const nameError = useRef();
    const emailError = useRef();
    const phoneError = useRef();
    const isAgreeError = useRef();
    const [ captchaOk, setCaptchaOk ] = useState(false);

    const checkFormData = () => {
        let formData = {
            "name": name.current.value,
            "email": email.current.value || "",
            "mobile": phone.current.value,
            "campaignCode":"7019D000000Ce79QAD",
            "url":"https://roswaltzaiden.com",
            "remarks":"Test Leads from RZ Website",
            "UTM_Medium":"RZ Website",
            "UTM_Source":"sub portal",
            "LeadIdentifier":"RZWebsite",
        };
        if(name.current.value === "" || phone.current.value === ""){
            setFormValid(false);
        }
        else if(name.current.value.length < 4){
            setFormValid(false);
            nameError.current.value = "Please enter atleast 4 characters"
        }
        else if(phone.current.value.length < 10){
            setFormValid(false);
            nameError.current.value = "Please enter 10 digits"
        }
        else if(!isAgree.current.checked){
            setFormValid(false);
            isAgreeError.current.textContent = "This is required"
            return false
        }
        else if(email.current.value === "" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.current.value)){
            emailError.current.value = "";
            setFormValid(true);
            submitFormData(formData);
        }else{
            setFormValid(false);
            emailError.current.value = "Please enter valid email";
        }
    }

    return (
        <section className="location full-height" id="location">
            <div className="map"></div>
            <div className="get-in-touch">
                {!successMsg ? (<div className="get-in-touch-wrapper">
                    <h3 className="git-title">Get In touch</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <fieldset className="form-fieldset">
                            <input type="text" placeholder="Name*" className="input-text" required ref={name} minLength={4} />
                            <span className="validation-error" ref={nameError}></span>
                        </fieldset>
                        <fieldset className="form-fieldset">
                            <input type="number" placeholder="Number*" className="input-text" required ref={phone} minLength={10} maxLength={10} />
                            <span className="validation-error" ref={phoneError}></span>
                        </fieldset>
                        <fieldset className="form-fieldset">
                            <input type="text" placeholder="Email Id" className="input-text" ref={email}  />
                            <span className="validation-error" ref={emailError}></span>
                        </fieldset>
                       <fieldset className="form-fieldset">
                            <CaptchaField onSuccess={isSuccess => setCaptchaOk(isSuccess)} onErrored={_ => setCaptchaOk(false)} onExpired={_ => setCaptchaOk(false)} />
                            <p className="validation-error text-danger" ref={isAgreeError}></p>
                        </fieldset>
                        <fieldset className="form-fieldset">
                            <label className="form-check">
                                <input type="checkbox" ref={isAgree}  />
                                <span style={{ color: "white" }}>{' '}I authorize Roswalt Realty & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call/RCS. This will override DND/NDNC settings.
                                Privacy Policy</span>
                            </label>
                            <p className="validation-error text-danger" ref={isAgreeError}></p>
                        </fieldset>
                        
                        {inProcess && (<fieldset className="form-fieldset">
                            <p className="process-req">Please wait while we process your request....</p>
                        </fieldset>)}
                        <fieldset className="form-fieldset btn-fieldset">
                            <button className="submit-btn" disabled={(inProcess || !captchaOk) ? 'disabled' : ''} onClick={() => checkFormData()}>Submit</button>
                        </fieldset>
                    </form>
                </div>) : (
                    <div className="get-in-touch-wrapper">
                        <p className="thankyou-msg">Thank you for your details! We'll soon get in touch with you.</p>
                    </div>
                )}
            </div>
        </section>
    )
}