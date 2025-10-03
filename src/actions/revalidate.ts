"use server";

import { revalidateTag } from "next/cache";

export const revalidateTagFn = async(tag: string) => {
    try {
        revalidateTag(tag)
        return { success: true }
    } catch (error) {
        console.error("Revalidation failed:", error);
        return { success: false, error: "Failed to revalidate" };
    }
}