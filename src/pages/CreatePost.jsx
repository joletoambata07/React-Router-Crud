import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CreatePost({ addPost }) {
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState("");
    const [ author, setAuthor ] = useState("");
    const navigate = useNavigate();

    function handleSubmit() {

        if (!title || !content || !author) {
            alert("All fields are required");
            return;
        }
        const newPost = {
            id: Date.now(),
            title,
            content,
            author
        };
        addPost(newPost);
        navigate("/")
        setTitle("");
        setContent("");
        setAuthor("");
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-xl mx-auto px-4 sm:px-6 py-10">
                <h1 className="text-3xl font-bold mb-8">Create Post</h1>
                    <div className="space-y-4">
                        <input
                        className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-white transition"
                        placeholder="Title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                        <input
                        className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-white transition"
                        placeholder="Content"
                        value={content}
                        onChange={(e)=>setContent(e.target.value)}
                        />
                        <input
                        className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-white transition"
                        placeholder="Author"
                        value={author}
                        onChange={(e)=>setAuthor(e.target.value)}
                        />
                        <button
                        onClick={handleSubmit}
                        className="w-full bg-white text-black py-3 rounded-lg hover:scale-[1.02] transition"
                        >Create Post</button>
                    </div>
            </div>
        </div>
    )
}