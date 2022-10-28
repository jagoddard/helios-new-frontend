import getApiInstance, { baseURL } from "./api";
import endpoint from "../data/endpointsV2.json";
import { FinancialType } from "../types/financialTypes";
import axios from "axios";

export const getFinancials = async () => {
    let api = getApiInstance({ 'Content-Type': 'application/json' });
    return await api.get(endpoint.financial)
}

export const addFinancials = async (data: FinancialType, token: string) => {
    let api = getApiInstance({ 'Content-Type': 'multipart/form-data' },token);
    let formData = new FormData()
    formData.append('year', data.year.toUpperCase())
    formData.append('heading', data.heading)
    formData.append('mdaFile', data.mdaFile)
    formData.append('file', data.file)
    return await api.post(endpoint.financial, formData)
}

export const editFinancials = async (data: FinancialType, token: string, id:number) => {
    let api = getApiInstance({ 'Content-Type': 'multipart/form-data' }, token);
    let formData = new FormData()
    formData.append('year', data.year.toUpperCase())
    formData.append('heading', data.heading)
    if(data.file){
        
    }
    formData.append('mdaFile', new Blob([]))
    formData.append('file', new Blob([]))
    return await api.put(`${endpoint.financial}/${id}`, formData)
}

export const deleteFinancials = async (id: number, token: string) => {
    let api = getApiInstance({ 'Content-Type': 'application/json' } ,token);
    return await api.delete(`${endpoint.financial}/${id}`)
}

export const getFinancialFileFromBlob = async (id: number) => {
    const response = await axios({
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: `${baseURL}${endpoint.financial}/${id}/blob/file`,
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

export const getFinancialMdaFileFromBlob = async (id: number) => {
    const response = await axios({
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: `${baseURL}${endpoint.financial}/${id}/blob/mdafile`,
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