/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/lib/axios"
// import { revalidateTag } from "next/cache";

export const fetchBlogs = async () => {
    const res = await api.get("/blog")

    // console.log(res);
    return res.data;
}


export const createBlog = async (payload: any) => {
    const res = await api.post("blog", payload)
    return res.data;
}

export const updateBlog = async (id: string, payload: any) => {
    const res = await api.patch(`/blog/${id}`, payload)
    return res.data;
}

export const deleteBlog = async (id: string) => {
    const res = await api.delete(`/blog/${id}`);
    return res.data;
};