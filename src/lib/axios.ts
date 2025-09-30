import { baseUrl } from "@/config/baseUrl";
import axios from "axios";

export const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    },
});
