import HttpService from "./httpService";
import Cookie from "js-cookie";

const ENDPOINTS = {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
};

class AuthService extends HttpService {
    constructor() {
        super();
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    async login(payload) {
        const { access_token } = await this.client.post(
            ENDPOINTS.LOGIN,
            payload
        );

        this.setAuthroization(access_token);
    }

    register = (payload) => this.client.post(ENDPOINTS.REGISTER, payload);

    setAuthroization(accessToken) {
        Cookie.set("token", accessToken);
        this.attachHeaders({ Authorization: `Bearer ${accessToken}` });
    }
}

export default new AuthService();
