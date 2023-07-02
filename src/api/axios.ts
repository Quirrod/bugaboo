import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:1337/api",
    baseURL: "https://bugaboo-backend-production.up.railway.app/api"
});
