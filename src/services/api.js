import axios from 'axios';

class Api {
    baseUrl = "http://localhost:4000/";

    constructor(endpoint) {
        this.baseUrl = this.baseUrl + endpoint;
    }

    async post(payload) {
        await axios.post(this.baseUrl, payload)
    }

    async get() {
        const data = await axios.get(this.baseUrl);
        return data.data;
    }
}

export default Api;