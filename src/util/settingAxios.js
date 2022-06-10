import axios from "axios"
import { useSelector } from "react-redux"
import { DOMAIN, TOKEN, TOKEN_CYBERSOFT } from "./setting"


export const http = axios.create({
    baseURL:DOMAIN,
    timeout:30000
})


http.interceptors.request.use((config) => { 
    config.headers = {
        ...config.headers,
        'TokenCybersoft': TOKEN_CYBERSOFT ,
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem(TOKEN)),
    }
    return config
 }, (errors)=>{
     return Promise.reject(errors)
 })