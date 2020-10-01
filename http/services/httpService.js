import axios from "axios";

const config = {
    baseURL: "http://localhost:8000/api",
};

class HttpService {
    constructor() {
        const client = require("axios").default.create(config);
        client.interceptors.request.use(this.setAuthorizationHeader);

        this.client = client;
    }

    setAuthorizationHeader(config) {
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }
}

export default HttpService;
