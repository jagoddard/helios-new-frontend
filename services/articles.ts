import getApiInstance, { baseURL } from "./api";
import endpoint from "../data/endpointsV2.json";
import { ArticleType } from "../types/articleTypes";
import axios from "axios";

export const getAllArticles = async () => {
    let api = getApiInstance({ 'Content-Type': 'application/json' });
    return await api.get(endpoint.articles)
}

export const addArticle = async (data: ArticleType, token: string) => {
    let api = getApiInstance({ 'Content-Type': 'multipart/form-data' }, token);
    let formData = new FormData()
    formData.append('date', data.date)
    formData.append('heading', data.heading)
    formData.append('content', data.content)
    formData.append('videoUrl', data.videoUrl)
    formData.append('file', data.file)
    return await api.post(endpoint.articles, formData)
}

export const editArticle = async (data: ArticleType, token: string, id: number) => {
    let api = getApiInstance({ 'Content-Type': 'multipart/form-data' }, token);
    let formData = new FormData()
    formData.append('date', data.date)
    formData.append('heading', data.heading)
    formData.append('content', data.content)
    formData.append('videoUrl', data.videoUrl)
    formData.append('file', data.file)
    return await api.put(`${endpoint.articles}/${id}`, formData)
}

export const deleteArticle = async (id: number, token: string) => {
    let api = getApiInstance({}, token);
    return await api.delete(`${endpoint.articles}/${id}`)
}

export const getArticleFileFromBlob = async (id: number) => {
    const response = await axios({
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: `${baseURL}${endpoint.articles}/${id}/blob`,
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