import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:1337/api",
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});
