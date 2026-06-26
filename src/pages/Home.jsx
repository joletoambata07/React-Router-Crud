import { Link } from "react-router-dom";

export default function Home({ posts, deletePost }) {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        My Posts
                    </h1>
                    <Link
                        to="/create"
                        className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                        Create Post
                    </Link>
                </div>
                {
                    posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-white/60 mb-5">
                                No posts yet.
                            </p>
                            <Link
                                to="/create"
                                className="border border-white/20 px-5 py-3 rounded-lg hover:border-white transition"
                            >
                                Create your first post
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-5">
                            {
                                posts.map(post => (
                                    <div
                                        key={post.id}
                                        className="border border-white/20 rounded-xl p-5 sm:p-6 hover:border-white/40 transition"
                                    >
                                        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-white/70 mb-4 leading-relaxed">
                                            {post.content}
                                        </p>
                                        <p className="text-sm text-white/50 mb-5">
                                            By {post.author}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Link
                                                to={`/posts/${post.id}`}
                                                className="border border-white/20 px-4 py-2 rounded-lg text-center hover:border-white transition"
                                            >
                                                View Details
                                            </Link>
                                            <Link
                                                to={`/edit/${post.id}`}
                                                className="border border-white/20 px-4 py-2 rounded-lg text-center hover:border-white transition"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => deletePost(post.id)}
                                                className="border border-white/20 px-4 py-2 rounded-lg hover:border-red-500 hover:text-red-400 transition"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}