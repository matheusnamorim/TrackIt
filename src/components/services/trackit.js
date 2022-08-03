import axios from "axios";

const base_URl = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function registerUser(body){
    const promise = axios.post(`${base_URl}/auth/sign-up`, body);
    return promise;
}

export {registerUser};