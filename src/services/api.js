import axios from 'axios';

class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async postAnswer(payload) {
        await axios.post(this.baseUrl, payload)
    }

    async getAnswers() {
        const data = await axios.get(this.baseUrl);
        return data.data;
    }

}

export default Api;