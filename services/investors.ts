import getApiInstance, { baseURL } from "./api";
import endpoint from "../data/endpointsV2.json";
import { InvestorType } from "../types/investorsTypes";
import axios from "axios";

export const getInvestors = async () => {
    let api = getApiInstance({ 'Content-Type': 'application/json' });
    return await api.get(endpoint.investors)
}

export const addInvestors = async (data: InvestorType, token: string) => {
    let api = getApiInstance({ 'Content-Type': 'multipart/form-data' }, token);
    let formData = new FormData()
    formData.append('heading', data.heading)
    formData.append('file', data.file)  
    return await api.post(endpoint.investors, data)
}

export const editInvestors = async (data: InvestorType, token: string, id:number) => {
    let api = getApiInstance({ 'Content-Type': 'multipart/form-data' }, token);
    let formData = new FormData()
    formData.append('heading', data.heading)
    formData.append('file', data.file)
    return await api.put(`${endpoint.investors}/${id}`, data)
}

export const deleteInvestors = async (id: number, token: string) => {
    let api = getApiInstance({'Content-Type': 'application/json'}, token);
    return await api.delete(`${endpoint.investors}/${id}`)
}

export const getInvestorFileFromBlob = async (id: number) => {
    const response = await axios({
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: `${baseURL}${endpoint.investors}/${id}/blob`,
        method: "GET",
        responseType: "blob",
    })
    const fileData = response.data;
    const url = window.URL.createObjectURL(new Blob([fileData], { type: "application/pdf" }));
    const link = document.createElement("a");
    link.href = url;
    // link.setAttribute("download", fileName);
    // link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    // link.click();
    window.open(url)
}