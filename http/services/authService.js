import BaseService from "./baseService";
import Cookie from "js-cookie";

const ENDPOINTS = {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    ME: "/auth/me",
    LOGOUT: "/auth/logout",
};

class AuthService extends BaseService {
    constructor() {
        super();
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.logout = this.logout.bind(this);

        const accessToken = Cookie.get("token");
        if (accessToken) {
            this.setAuthroization(accessToken);
        }
    }

    async login(payload) {
        const { access_token } = await this.client.post(
            ENDPOINTS.LOGIN,
            payload
        );

        this.setAuthroization(access_token);
    }

    register = (payload) => this.client.post(ENDPOINTS.REGISTER, payload);

    me = async () => await this.client.get(ENDPOINTS.ME);

    logout = async () => {
        await this.client.post(ENDPOINTS.LOGOUT);
        this.setAuthroization(null);
    };

    setAuthroization(accessToken) {
        Cookie.set("token", accessToken);
        this.httpService.attachHeaders({
            Authorization: `Bearer ${accessToken}`,
        });
    }
}

export default new AuthService();
