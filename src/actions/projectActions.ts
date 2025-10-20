/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { baseUrl } from "@/config/baseUrl";
import { IProject } from "@/types";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

//  Helper to get token safely
const getToken = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken");
    return token?.value;
};

//  CREATE Project
export const createProjectAction = async (data: IProject) => {
    const token = await getToken();
    console.log('createProjectAction hit');

    try {
        const res = await fetch(`https://portfolio-server-fawn-tau.vercel.app/api/project`, {
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
            return { success: false, message: resData.message || "Failed to create project" };
        }
        // console.log('resData:', resData);
        revalidateTag("projects"); // optional
        return { success: true, data: resData.data, message: "Project created successfully" };
    } catch (error) {
        return { success: false, message: "Something went wrong while creating project" };
    }
};

//  UPDATE Project
export const updateProjectAction = async (id: string, data: Partial<IProject>) => {
    const token = await getToken();
    console.log('updateProjectAction hit');
    try {
        const res = await fetch(`https://portfolio-server-fawn-tau.vercel.app/api/project/${id}`, {
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
            return { success: false, message: resData.message || "Failed to update project" };
        }

        revalidateTag("projects");
        return { success: true, data: resData.data, message: "Project updated successfully" };
    } catch (error) {
        return { success: false, message: "Something went wrong while updating project" };
    }
};

//  DELETE Project
export const deleteProjectAction = async (id: string) => {
    const token = await getToken();

    try {
        const res = await fetch(`https://portfolio-server-fawn-tau.vercel.app/api/project/${id}`, {
            method: "DELETE",
            headers: {
                Cookie: `accessToken=${token}`,
            },
            // cache: "no-store",
        });

        const resData = await res.json();
        if (!res.ok || !resData.success) {
            return { success: false, message: resData.message || "Failed to delete project" };
        }

        revalidateTag("projects");
        return { success: true, message: "Project deleted successfully" };
    } catch (error) {
        return { success: false, message: "Something went wrong while deleting project" };
    }
};
