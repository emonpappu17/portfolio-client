/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const uploadImageToImgBB = async (imageFile: File) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, formData);

        if (res.data.success) {
            return res.data.data.display_url
        }
        else {
            throw new Error("Image upload failed")
        }

    } catch (error: any) {
        console.log('uploadImageToImgBB err==>', error);
        return {
            error: true,
            message: error.response.data.error.message,
        }
    }
}