import axios from "axios";
import apis from "./API_URL";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH"
    }
};

async function LoginStatus(userdata) {
    console.log("hello 123")
    const result = await axios.post("http://localhost:5120/Authentication/Login", userdata, config)
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    console.log("Hello " + result);
}

export default LoginStatus;