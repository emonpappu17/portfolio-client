"use server"

import { baseUrl } from "@/config/baseUrl"
import { IProject } from "@/types"
import { cookies } from "next/headers"

export const createProjectAction = async (data: IProject) => {
    const cookieStore = await cookies()
    const token = cookieStore.get("accessToken");

    // console.log("token:=>", token);

    try {
        const res = await fetch(`${baseUrl}/project`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Cookie: `accessToken=${token?.value}`
            },
            body: JSON.stringify(data),
        })

        const resData = await res.json();

        if (!res.ok || !resData.success) {
            return { success: false, message: resData.message || 'Failed to create project' }
        }
        console.log("resData==>", resData);
        //
        // console.log(res.);
        return resData
    } catch (error) {
        return { success: false, message: 'Failed to create project' }
    }
}     