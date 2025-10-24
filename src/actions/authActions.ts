/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";

//  Helper to get token safely
const getToken = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken");
    return token?.value;
};

export const login = async (values: any) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(values),
        })

        const resData = await res.json();
        if (!res.ok || !resData.success) {
            return { success: false, message: resData.message || "Failed to login" };
        }

        const cookieStore = await cookies()

        cookieStore.set('accessToken', resData?.data?.accessToken, {
            httpOnly: true,
            sameSite: 'none',
            secure: true,
            path: '/',
        });

        return { success: true, data: resData.data, message: "login successfully" };

    } catch (err: any) {
        return { success: false, message: "Something went wrong to login" };
    }
}


export const getProfile = async () => {
    const token = await getToken();

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Cookie: `accessToken=${token}`,
            },
            credentials: "include",
        });

        const resData = await res.json();
        if (!res.ok || !resData.success) {
            return { success: false, message: resData.message || "Failed to get profile" };
        }

        return { success: true, data: resData.data, message: "Profile got successfully" };
    } catch (error) {
        return { success: false, message: "Something went wrong while getting profile" };
    }
};


export const logout = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        const resData = await res.json();
        if (!res.ok || !resData.success) {
            return { success: false, message: resData.message || "Failed to logout" };
        }

        const cookieStore = await cookies()
        cookieStore.delete("accessToken");

        return { success: true, data: resData.data, message: "Logout successfully" };
    } catch (error) {
        return { success: false, message: "Something went wrong while logout" };
    }
};