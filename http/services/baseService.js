import HttpService from "./httpService";

class BaseService {
    constructor() {
        this.httpService = HttpService;
        this.client = HttpService.client;
    }
}

export default BaseService;
