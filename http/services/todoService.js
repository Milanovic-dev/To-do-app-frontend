import BaseService from "./baseService";
import Cookie from "js-cookie";

const ENDPOINTS = {
    GET_TODOS: (id) => `/users/${id}/todos`,
};

class TodoService extends BaseService {
    constructor() {
        super();

        this.getTodos = this.getTodos.bind(this);
    }

    async getTodos(payload) {
        const todos = await this.client.get(ENDPOINTS.GET_TODOS(payload));
        return todos;
    }
}

export default new TodoService();
