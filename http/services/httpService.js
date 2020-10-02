import axios from "axios";

const config = {
    baseURL: process.env.API_URL,
};

class HttpService {
    constructor() {
        const client = require("axios").default.create(config);

        this.client = client;
    }

    attachHeaders(headers) {
        Object.assign(this.client.defaults.headers, headers);
    }
}

export default HttpService;
