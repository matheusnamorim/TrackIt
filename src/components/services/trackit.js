import axios from "axios";

const base_URl = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem("trackit"));

    const config = {
        headers:{Authorization: `Bearer ${auth.token}`}
    }
    return config;
}

function signIn(body){
    const promise = axios.post(`${base_URl}/auth/login`, body);
    return promise;
}

function registerUser(body){
    const promise = axios.post(`${base_URl}/auth/sign-up`, body);
    return promise;
}

function habitsList(body){
    const config = createHeaders();
    const promise = axios.get(`${base_URl}/habits`, config, body);
    return promise;
}

function createHabit(body){
    const config = createHeaders();
    const promise = axios.post(`${base_URl}/habits`, body, config);
    return promise;
}

function deleteHabits(id){
    const config = createHeaders();
    const promise = axios.delete(`${base_URl}/habits/${id}`, config);
    return promise;
}

function habitsOfToday(){
    const config = createHeaders();
    const promise = axios.get(`${base_URl}/habits/today`, config);
    return promise;
}

function doneHabits(id, body){
    const config = createHeaders();
    const promise = axios.post(`${base_URl}/habits/${id}/check`, body, config);
    return promise;
}

function unDoneHabits(id, body){
    const config = createHeaders();
    const promise = axios.post(`${base_URl}/habits/${id}/uncheck`, body, config);
    return promise;
}

export { signIn, registerUser, habitsList, createHabit, deleteHabits, habitsOfToday, doneHabits, unDoneHabits};