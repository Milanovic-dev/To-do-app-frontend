import HttpService from "./httpService";

class AuthService extends HttpService {
    constructor() {
        super();
        this.login = this.login.bind(this);
    }

    async login(payload) {
        const data = await this.client.post("/auth/login", payload);

        const accessToken = data.access_token;
        localStorage.setItem("token", accessToken);
    }
}

export default new AuthService();
