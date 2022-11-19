import axios from "axios";

export const getAuthToken = (formData) => {
    const AUTHENDPOINT = "https://login.salesforce.com/services/oauth2/token";

    axios
    .post(AUTHENDPOINT, null, {
        params: {
            grant_type: "password",
            client_id: process.env.REACT_APP_LOGIN_CLIENT_ID,
            client_secret: process.env.REACT_APP_LOGIN_CLIENT_SECRET,
            username: process.env.REACT_APP_LOGIN_USERNAME,
            password: process.env.REACT_APP_LOGIN_PASSWORD
        },
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    })
    .then((res) => {
        console.log('Response', res);
        let data = res.data;
        let accessToken = data.access_token,
            instanceURL = data.instance_url;
        try{
            submitFormData(accessToken, instanceURL, formData);
        }catch(e){
            console.log(e);
        }
    })
}

const submitFormData = (accessToken, instanceURL, formData) => {
    console.log("Form submit data happening", accessToken, instanceURL);
}