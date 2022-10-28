import getApiInstance from "./api";
import endpoint from "../data/endpoints.json";

export const login = async (data: { username: string, password: string }) => {
    let api = getApiInstance()
    return await api.post(endpoint.login, data)
}