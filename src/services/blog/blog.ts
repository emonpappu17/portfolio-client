/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/lib/axios"
// import { revalidateTag } from "next/cache";

export const createBlog = async (payload: any) => {
    const res = await api.post("blog/create", payload)
    // revalidateTag("blogs");
    return res.data;
}