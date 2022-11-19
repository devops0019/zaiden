import axios from "axios";

export const getAuthToken = (formData) => {
    const AUTHENDPOINT = "https://login.salesforce.com/services/oauth2/token";

    console.log('Checking client_id', process.env.LOGIN_CLIENT_ID);

    let loginData = {
        grant_type: "password",
        client_id: process.env.LOGIN_CLIENT_ID,
        client_secret: process.env.LOGIN_CLIENT_SECRET,
        username: process.env.LOGIN_USERNAME,
        password: process.env.LOGIN_PASSWORD
    }

    axios
    .post(AUTHENDPOINT, loginData, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    })
    .then((res) => {
        console.log('Response', res);
        let accessToken = res.access_token,
            instanceURL = res.instance_url;

        //submitFormData(accessToken, instanceURL, formData);
    })
}
