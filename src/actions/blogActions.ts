/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { baseUrl } from "@/config/baseUrl";
import { IBlog } from "@/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

//  Helper to get token safely
const getToken = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken");
    return token?.value;
};

//  CREATE Blog
export const createBlogAction = async (data: IBlog) => {
    const token = await getToken();

    console.log({ token });

    try {
        const res = await fetch(`https://portfolio-server-fawn-tau.vercel.app/api/blog`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Cookie: `accessToken=${token}`,
            },
            body: JSON.stringify(data),
            // cache: "no-store",
        });

        const resData = await res.json();
        if (!res.ok || !resData.success) {
            return { success: false, message: resData.message || "Failed to create blog" };
        }
        // console.log('resData:', resData);
        revalidateTag("blogs"); // optional
        return { success: true, data: resData.data, message: "Blog created successfully" };
    } catch (error) {
        return { success: false, message: "Something went wrong while creating blog" };
    }
};

//  UPDATE Blog
export const updateBlogAction = async (slug: string, data: Partial<IBlog>) => {
    const token = await getToken();

    try {
        const res = await fetch(`https://portfolio-server-fawn-tau.vercel.app/api/blog/${slug}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Cookie: `accessToken=${token}`,
            },
            body: JSON.stringify(data),
            // cache: "no-store",
        });

        const resData = await res.json();
        if (!res.ok || !resData.success) {
            return { success: false, message: resData.message || "Failed to update blog" };
        }

        revalidateTag("blogs");
        return { success: true, data: resData.data, message: "Blog updated successfully" };
    } catch (error) {
        return { success: false, message: "Something went wrong while updating blog" };
    }
};

//  DELETE Blog
export const deleteBlogAction = async (id: string) => {
    const token = await getToken();

    try {
        const res = await fetch(`https://portfolio-server-fawn-tau.vercel.app/api/blog/${id}`, {
            method: "DELETE",
            headers: {
                Cookie: `accessToken=${token}`,
            },
            // cache: "no-store",
        });

        const resData = await res.json();
        if (!res.ok || !resData.success) {
            return { success: false, message: resData.message || "Failed to delete blog" };
        }

        revalidateTag("blogs");
        return { success: true, message: "Blog deleted successfully" };
    } catch (error) {
        return { success: false, message: "Something went wrong while deleting blog" };
    }
};
