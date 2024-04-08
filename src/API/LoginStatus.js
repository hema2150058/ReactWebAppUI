import axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH"
    }
};

export default async function LoginStatus(userdata) {

    const { data } = await axios.post("http://localhost:5120/Authentication/Login", userdata, config);

    return data.statusCode;
}

export async function userDashboard(userId) {

    const { data } = await axios.get("http://localhost:5120/Home/UserDashboard?userId=" + userId, config);

    return data.accounts;
}

export async function userProfileData(userId) {

    const { data } = await axios.get("http://localhost:5120/Home/UserProfile?userId=" + userId, config);

    return data;
}