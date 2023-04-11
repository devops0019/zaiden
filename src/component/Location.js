import React, {useRef, useState} from "react";
import axios from "axios";

export const Location = () => {

    let [formValid, setFormValid] = useState(false);
    let [successMsg, showSuccessMsg] = useState(false);
    let [inProcess, setInProcess] = useState(false);

    const submitFormData = (formData) => {
        setInProcess(true);
        const HOST = "https://zapi-devops0019.vercel.app";
        const FORMDATAURL = `${HOST}/createlead`;

        axios.post(FORMDATAURL, formData, {
        }).then(res => {
            let message = res.data.message;
            if(res.status === 200 && message === "Lead Created Successfully"){
                showSuccessMsg(true);
                setInProcess(false);
            }else{
                console.error("Lead not captured");
            }
        });
    }

    const name = useRef();
    const phone = useRef();
    const email = useRef();
    const nameError = useRef();
    const emailError = useRef();
    const phoneError = useRef();

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
        else if(email.current.value === ""){
            setFormValid(true);
            submitFormData(formData);
        }
        else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.current.value)){
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
                        <fieldset className="form-fieldset btn-fieldset">
                            <button className="submit-btn" disabled={inProcess ? 'disabled' : ''} onClick={() => checkFormData()}>Submit</button>
                        </fieldset>
                        {inProcess && (<fieldset className="form-fieldset">
                            <p className="process-req">Please wait while we process your request....</p>
                        </fieldset>)}
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