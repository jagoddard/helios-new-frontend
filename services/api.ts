import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://d2lithium-backend.azurewebsites.net/api"

export const api = axios.create({
    baseURL: baseURL
})

const getApiInstance = (headers = {}, token:string ="") => {
    api.defaults.headers = {
        ...api.defaults.headers,
        ...headers,
    };
    // api.defaults.headers.common['Content-Type'] = 'application/json';
    if (token !== "") {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    return api;
}

export default getApiInstance
