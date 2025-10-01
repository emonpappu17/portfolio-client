/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/lib/axios";

export const getProfile = async () => {
    // const res = await api.get('/user/me');
    // console.log('res==>', res);
    // return res.data;

    try {
        const res = await api.get("/user/me");
        return res.data; // { success: true, user: { id, name, ... } }
    } catch (err: any) {
        return null; // Not logged in
    }
} 