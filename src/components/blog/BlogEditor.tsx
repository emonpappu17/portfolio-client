"use client"
import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill-new/dist/quill.snow.css';

// Dynamically import ReactQuill so it only runs in the browser
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const BlogEditor = () => {
    // const [value, setValue] = useState('');
    // console.log('quill value=>', value);

    const [value, setValue] = useState('');
    // const quillRef = useRef<any>(null);

    // const imageHandler = () => {
    //     const input = document.createElement("input");
    //     input.setAttribute("type", "file");
    //     input.setAttribute("accept", "image/*");
    //     input.click();
    //     input.onchange = async () => {
    //         const file = input.files?.[0];
    //         if (!file) return;
    //         const { url } = await uploadImage(file);
    //         const quill = quillRef.current.getEditor();
    //         const range = quill.getSelection(true);
    //         quill.insertEmbed(range.index, "image", url);
    //     };
    // };

    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                ["clean"]
            ],
            // handlers: { image: imageHandler }
        }
    };
    return (
        <div>
            <h1>CreateBlog</h1>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
            />

            <ReactQuill
                // ref={quillRef}
                value={value}
                onChange={(html) => { setValue(html) }}
                modules={modules}
                placeholder='Write something...'
                className='h-72 mb-12'
            />
        </div>
    );
};

export default BlogEditor;