import React, {useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const CommonGetinTouchForm = ({commonFormState, setCommonFormState, downloadReq}) => {

    let [formValid, setFormValid] = useState(false);
    let [successMsg, showSuccessMsg] = useState(false);

    const downloadBrochure = () => {
        let element = document.createElement('a');
        element.setAttribute('href', 'https://github.com/Gauravp15/zaiden/raw/main/ROSWALT%20ZAIDEN.pdf');
        element.setAttribute('download', 'ROSWALT ZAIDEN');
        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();
        document.body.removeChild(element);
    }

    const submitFormData = (formData, downloadReq = false) => {
        const HOST = "https://zapi.onrender.com" || "https://zapi-vert.vercel.app";
        const FORMDATAURL = `${HOST}/createlead`;

        axios.post(FORMDATAURL, formData, {
        }).then(res => {
            let message = res.data.message;
            if(res.status === 200 && message === "Lead Created Successfully"){
                showSuccessMsg(true);
                if(downloadReq){
                    downloadBrochure();
                }
            }else{
                console.error("Lead not captured");
            }
        })
    }

    const name = useRef();
    const phone = useRef();
    const email = useRef();
    const emailError = useRef();

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
        else if(email.current.value === ""){
            setFormValid(true);
            submitFormData(formData, downloadReq);
        }
        else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.current.value)){
            emailError.current.value = "";
            setFormValid(true);
            submitFormData(formData, downloadReq);
        }else{
            setFormValid(false);
            emailError.current.value = "Please enter valid email";
        }
    }

    return(
        <div className={`form-overlay ${commonFormState ? 'show' : 'hidden'}`}>
            <div className="get-in-touch">
                <button className="close-button" type="button" onClick={() => setCommonFormState(false)}>
                    <FontAwesomeIcon icon={faXmark} color="gray" fontSize={27} />
                </button>
                {!successMsg ? (<div className="get-in-touch-wrapper">
                    <h3 className="git-title">Get In touch</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <fieldset className="form-fieldset">
                            <input type="text" placeholder="Name*" className="input-text" required ref={name} minLength={4} />
                        </fieldset>
                        <fieldset className="form-fieldset">
                            <input type="number" placeholder="Number*" className="input-text" required ref={phone} minLength={10} maxLength={10} />
                        </fieldset>
                        <fieldset className="form-fieldset">
                            <input type="text" placeholder="Email Id" className="input-text" ref={email}  />
                            <span className="validation-error email" ref={emailError}></span>
                        </fieldset>
                        <fieldset className="form-fieldset btn-fieldset">
                            <button className="submit-btn" onClick={() => checkFormData()}>Submit</button>
                        </fieldset>
                    </form>
                </div>) : (
                    <div className="get-in-touch-wrapper">
                        <p className="thankyou-msg">Thank you for your details! We'll soon get in touch with you.</p>
                    </div>
                )}
            </div>
        </div>
    )
}