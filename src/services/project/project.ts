import { api } from "@/lib/axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createProject = async (payload: any) => {
    const res = await api.post("/project", payload)
    return res.data;
}
