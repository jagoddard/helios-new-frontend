import getApiInstance from "./api";
import endpoints from '../data/endpointsV2.json'

export const getAgmConfig = async () => {
    let api = getApiInstance();
    return await api.get(`${endpoints.agm}/config`)
}

export const editAgmConfig =async (id: number, data: any, token: string) => {
    let api = getApiInstance({'Content-Type': 'application/json'}, token)
    return await api.put(`${endpoints.agm}/config/${id}`, data);
}
