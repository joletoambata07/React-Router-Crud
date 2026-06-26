import { useParams } from "react-router-dom";

export default function  PostDetails({ posts }) {
    const { id } = useParams();
    const post = posts.find(post => post.id === Number(id));
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-3xl mx-auto px-4 py-10">  
                <div className="border border-white/20 rounded-xl p-6 animate-fade">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <p className="text-white/70 mb-5">{post.content}</p>
                    <p className="text-sm text-white/50">By {post.author}</p>
                </div>
            </div>
        </div>
    )
}