/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/lib/axios"

export const createBlog = async (payload: any) => {
    const res = await api.post("blog/create", payload)
    return res.data;
}