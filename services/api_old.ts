import endpoint from "../data/endpoints.json";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export function getNews() {
  return axios.get(BASE_URL + endpoint.news.fetchNews);
}

export function getArticles() {
  return axios.get(BASE_URL + endpoint.news.fetchArticles);
}

export function getInvestors() {
  return axios.get(BASE_URL + endpoint.news.fetchInvestors);
}

export function getReports() {
  return axios.get(BASE_URL + endpoint.news.fetchReports);
}

export function getFinancials() {
  return axios.get(BASE_URL + endpoint.news.fetchFinancials);
}

export function getAgmDocs() {
  return axios.get(BASE_URL + endpoint.news.fetchAgmReports);
}

export function loginDetails(data: any) {
  return axios.post(BASE_URL + endpoint.login, data);
}
export function editNews(data: any, token: any) {
  let formData = new FormData();
  formData.append('fileUrl', data.fileUrl);
  formData.append('date', data.date);
  formData.append('content', data.content);
  formData.append('id', data.id);
  formData.append('heading', data.heading);
  formData.append('videoUrl', data.videoUrl);
  return fetch(BASE_URL + endpoint.news.fetchNews, {
    method: "PUT",
    headers: {
      token
    },
    body: formData
  }).then((res) => res.json());
}

export function editArticles(data: any, token: any) {
  let formData = new FormData();
  formData.append('fileUrl', data.fileUrl);
  formData.append('date', data.date);
  formData.append('content', data.content);
  formData.append('id', data.id);
  formData.append('heading', data.heading);
  formData.append('videoUrl', data.videoUrl);
  return fetch(BASE_URL + endpoint.news.fetchArticles, {
    method: "PUT",
    headers: {
      token
    },
    body: formData
  }).then((res) => res.json());
}

export function editFinancials(data: any, token: any) {
  let formData = new FormData();
  formData.append('financialsUrl', data.fileUrl);
  formData.append('mdaUrl', data.mdaUrl);
  formData.append('id', data.id);
  formData.append('label', data.label);
  formData.append('year', data.year);
  return fetch(BASE_URL + endpoint.news.fetchFinancials, {
    method: "PUT",
    headers: {
      token
    },
    body: formData
  }).then((res) => res.json());
}

export function editReports(data: any, token: any) {
  let formData = new FormData();
  formData.append('fileUrl', data.fileUrl);
  formData.append('id', data.id);
  formData.append('heading', data.heading);
  formData.append('date', data.date);
  return fetch(BASE_URL + endpoint.news.fetchReports, {
    method: "PUT",
    headers: {
      token
    },
    body: formData
  }).then((res) => res.json());
}

export function editInvestors(data: any, token: any) {
  let formData = new FormData();
  formData.append('fileUrl', data.fileUrl);
  formData.append('id', data.id);
  formData.append('heading', data.heading);
  return fetch(BASE_URL + endpoint.news.fetchInvestors, {
    method: "PUT",
    headers: {
      token
    },
    body: formData
  }).then((res) => res.json());
}

export function addNews(data: any, token: any) {
  let formData = new FormData();
  formData.append('fileUrl', data.fileUrl);
  formData.append('date', data.date);
  formData.append('content', data.content);
  formData.append('id', data.id);
  formData.append('heading', data.heading);
  formData.append('videoUrl', data.videoUrl);
  return fetch(BASE_URL + endpoint.news.fetchNews, {
    method: "POST",
    headers: {
      token
    },
    body: formData
  }).then((res) => res.json());
}

export function addArticles(data: any, token: any) {
  let formData = new FormData();
  formData.append('fileUrl', data.fileUrl);
  formData.append('date', data.date);
  formData.append('content', data.content);
  formData.append('id', data.id);
  formData.append('heading', data.heading);
  formData.append('videoUrl', data.videoUrl);
  return fetch(BASE_URL + endpoint.news.fetchArticles, {
    method: "POST",
    headers: {
      token
    },
    body: formData
  }).then((res) => res.json());
}

export function addFinancials(data: any, token: any) {
  let formData = new FormData();
  formData.append('financialsUrl', data.fileUrl);
  formData.append('mdaUrl', data.mdaUrl);
  // formData.append('id', data.id);
  formData.append('label', data.label);
  formData.append('year', data.year);
  return fetch(BASE_URL + endpoint.news.fetchFinancials, {
    method: "POST",
    headers: {
      token
    },
    body: formData
  }).then((res) => res.json());
}

export function addReports(data: any, token: any) {
  let formData = new FormData();
  formData.append('fileUrl', data.fileUrl);
  formData.append('id', data.id);
  formData.append('heading', data.heading);
  return fetch(BASE_URL + endpoint.news.fetchReports, {
    method: "POST",
    headers: {
      token
    },
    body: formData
  }).then((res) => res.json());
}

export function addInvestors(data: any, token: any) {
  let formData = new FormData();
  formData.append('fileUrl', data.fileUrl);
  formData.append('id', data.id);
  formData.append('heading', data.heading);
  return fetch(BASE_URL + endpoint.news.fetchInvestors, {
    method: "POST",
    headers: {
      token
    },
    body: formData
  }).then((res) => res.json());
}


export function deleteNews(id: any, token: any) {
  return axios.delete(BASE_URL + endpoint.news.fetchNews + '/' + id, {
    headers: {
      token
    },
  });
}

export function deleteReports(id: any, token: any) {
  return axios.delete(BASE_URL + endpoint.news.fetchReports + '/' + id, {
    headers: {
      token
    },
  });
}

export function deleteInvestors(id: any, token: any) {
  return axios.delete(BASE_URL + endpoint.news.fetchInvestors + '/' + id, {
    headers: {
      token
    },
  });
}

export function deleteFinancials(id: any, token: any) {
  return axios.delete(BASE_URL + endpoint.news.fetchFinancials + '/' + id, {
    headers: {
      token
    },
  });
}

export function deleteArticles(id: any, token: any) {
  return axios.delete(BASE_URL + endpoint.news.fetchArticles + '/' + id, {
    headers: {
      token
    },

  });
}

