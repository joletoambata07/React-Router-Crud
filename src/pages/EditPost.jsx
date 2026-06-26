import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditPost({ posts, updatePost }) {
    
    const navigate = useNavigate();
    const { id } = useParams();
    const post = posts.find(post => post.id === Number(id));
    if (!post) {
        return <h1>Post not found</h1>
    }
    const [ editTitle, setEditTitle ] = useState(post.title);
    const [ editContent, setEditContent ] = useState(post.content);
    const [ editAuthor, setEditAuthor ] = useState(post.author);


    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
                <div className="space-y-4">
                    <input
                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:border-white outline-none transition"
                    value={editTitle}
                    onChange={(e)=>setEditTitle(e.target.value)}
                    />
                    <input
                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:border-white outline-none transition"
                    value={editContent}
                    onChange={(e)=>setEditContent(e.target.value)}
                    />
                    <input
                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:border-white outline-none transition"
                    value={editAuthor}
                    onChange={(e)=>setEditAuthor(e.target.value)}
                    />
                    <button
                    type="button"
                    onClick={()=>{
                    updatePost(
                    Number(id),
                    editTitle,
                    editContent,
                    editAuthor
                    )
                    navigate("/")
                    }}
                    className="w-full bg-white text-black py-3 rounded-lg hover:scale-[1.02] transition"
                    >
                    Save Changes
                    </button>
                </div>
            </div>
        </div>
)
}