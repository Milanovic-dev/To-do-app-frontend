import Cookie from "js-cookie";

const config = {
    baseURL: "http://localhost:8000/api",
};

class HttpService {
    constructor() {
        const client = require("axios").default.create(config);
        client.interceptors.response.use(
            this.successResolver,
            this.failResolver
        );
        this.client = client;
    }

    attachHeaders(headers) {
        Object.assign(this.client.defaults.headers, headers);
    }

    successResolver(response) {
        return response.data;
    }

    failResolver(error) {
        try {
            const status = error.response.status;
            switch (status) {
                case 401:
                    Cookie.remove("token");
                    break;
                case 500:
                    console.error(error);
                    break;
                default:
                    break;
            }
            return Promise.reject(error);
        } catch (e) {
            return Promise.reject(error);
        }
    }
}

export default HttpService;
