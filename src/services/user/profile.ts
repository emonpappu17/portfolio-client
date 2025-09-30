import { api } from "@/lib/axios";

export const getProfile = async () => {
    const res = await api.get('/user/me');
    return res.data;
} 