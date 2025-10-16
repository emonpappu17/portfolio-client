/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/lib/axios";

export const getProfile = async () => {
    try {
        const res = await api.get("/user/me");
        return res.data;
    } catch (err: any) {
        return null; // Not logged in
    }
} 