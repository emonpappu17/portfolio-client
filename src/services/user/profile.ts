import { baseUrl } from "@/config/baseUrl";

export const getProfile = async () => {
    console.log('getProfile hit');
    const res = await fetch(`${baseUrl}/user/me`, {
        method: "GET",
        credentials: "include",
        // headers: {
        //     "Content-Type": "application/json"
        // },
        // body: JSON.stringify(data)
    });

    return await res.json();
}