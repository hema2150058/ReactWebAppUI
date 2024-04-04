import axios from "axios";
import apis from "./API_URL";

export function LoginStatus(userdata) {
    const result = axios.post(apis.defaultAPI + apis.loginAPI, userdata)
        .then((response) => {
            console.log(response);
        });
    console.log(result);
}