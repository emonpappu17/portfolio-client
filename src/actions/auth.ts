// "use server"

import { LoginFormValues } from "@/components/auth/LoginForm";
import { baseUrl } from "@/config/baseUrl";

export const login = async (data: LoginFormValues) => {
    // console.log('baseUrl==>', baseUrl);
    const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            // "Content-Type:": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    // console.log('res=>', res);

    return await res.json();
}