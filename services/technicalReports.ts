import getApiInstance, { baseURL } from "./api";
import endpoint from "../data/endpointsV2.json";
import { TechnicalReportsType } from "../types/technicalReportsType";
import axios from "axios";

export const getTechnicalReports = async () => {
    let api = getApiInstance({ 'Content-Type': 'application/json' });
    return await api.get(endpoint.technical_reports)
}

export const addTechnicalReports = async (data: TechnicalReportsType, token: string) => {
    let api = getApiInstance({ 'Content-Type': 'multipart/form-data' }, token);
    let formData = new FormData()
    formData.append('date', data.date)
    formData.append('heading', data.heading)
    formData.append('file', data.file) 
    return await api.post(endpoint.technical_reports, formData)
}

export const editTechnicalReports = async (data: TechnicalReportsType, token: string, id:number) => {
    let api = getApiInstance({ 'Content-Type': 'multipart/form-data' }, token);
    let formData = new FormData()
    formData.append('date', data.date)
    formData.append('heading', data.heading)
    formData.append('file', data.file) 
    return await api.put(`${endpoint.technical_reports}/${id}`, formData)
}

export const deleteTechnicalReports = async (id: number, token: string) => {
    let api = getApiInstance({}, token);
    return await api.delete(`${endpoint.technical_reports}/${id}`)
}

export const getTechnicalFileFromBlob = async (id: number) => {
    const response = await axios({
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: `${baseURL}${endpoint.technical_reports}/${id}/blob`,
        method: "GET",
        responseType: "blob",
    })
    const fileData = response.data;
    const url = window.URL.createObjectURL(new Blob([fileData], { type: "application/pdf" }));
    return url;
}