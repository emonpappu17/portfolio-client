import { baseUrl } from "@/config/baseUrl";
import axios from "axios";

export const api = axios.create({
    baseURL: "https://portfolio-server-fawn-tau.vercel.app/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    },
});
