import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { apiConfig } from 'config/apiConfig';
import { accessKey } from 'keys/splash';
import { Header } from './header';

const ApiService: AxiosInstance = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: Header(accessKey),
    timeout: 5000,
})

async function getAxios<T>(url: string, params?: any): Promise<T> {
    const response: AxiosResponse<T> = await ApiService.get(url, { params });
    return response.data;
}

async function postAxios<T>(url: string, data?: any): Promise<T> {
    const response: AxiosResponse<T> = await ApiService.post(url, data);
    return response.data;
}
async function putAxios<T>(url: string, data?: any): Promise<T> {
    const response: AxiosResponse<T> = await ApiService.post(url, data);
    return response.data;
}

async function deleteAxios<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await ApiService.post(url);
    return response.data;
}

export {
    getAxios,
    postAxios,
    putAxios,
    deleteAxios
}