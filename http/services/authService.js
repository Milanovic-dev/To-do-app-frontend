import HttpService from "./httpService";

const ENDPOINTS = {
    LOGIN: "/auth/login",
};

class AuthService extends HttpService {
    constructor() {
        super();
        this.login = this.login.bind(this);
    }

    async login(payload) {
        const { accessToken } = await this.client.post(
            ENDPOINTS.LOGIN,
            payload
        );

        this.setAuthroization(accessToken);
    }

    setAuthroization(accessToken) {
        localStorage.setItem("token", accessToken);
        this.attachHeaders({ Authorization: `Bearer ${accessToken}` });
    }
}

export default new AuthService();
