import axios from "axios";

export const api = axios.create({
    baseURL: 'https://192.168.0.172:3333',
})