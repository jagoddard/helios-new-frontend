import getApiInstance, { baseURL } from "./api";
import endpoint from "../data/endpointsV2.json";
import { NewsType } from "../types/newsTypes";
import axios from "axios";
export const getAllNews = async () => {
    let api = getApiInstance({ 'Content-Type': 'application/json' });
    return await api.get(endpoint.news)
}

export const addNews = async (data: NewsType, token: string) => {
    let api = getApiInstance({ 'Content-Type': 'multipart/form-data' }, token);
    let formData = new FormData()
    formData.append('date', data.date)
    formData.append('heading', data.heading)
    formData.append('content', data.content)
    formData.append('videoUrl', data.videoUrl)
    formData.append('file', data.file)
    return await api.post(endpoint.news, formData)
}

export const editNews = async (data: NewsType, token: string, id: number) => {
    let api = getApiInstance({ 'Content-Type': 'multipart/form-data' }, token);
    let formData = new FormData()
    formData.append('date', data.date)
    formData.append('heading', data.heading)
    formData.append('content', data.content)
    formData.append('videoUrl', data.videoUrl)
    formData.append('file', data.file)
    return await api.put(`${endpoint.news}/${id}`, formData)
}

export const deleteNews = async (id: number, token: string) => {
    let api = getApiInstance({ 'Content-Type': 'application/json' }, token);
    return await api.delete(`${endpoint.news}/${id}`)
}

export const getFileFromBlob = async (id: number, fileName: string = "") => {
    const response = await axios({
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: `${baseURL}${endpoint.news}/${id}/blob`,
        method: "GET",
        responseType: "blob",
    })
    const fileData = response.data;
    const url = window.URL.createObjectURL(new Blob([fileData], { type: "application/pdf" }));
    return url;
}