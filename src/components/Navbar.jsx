import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/20 bg-black/80 backdrop-blur text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
                <Link 
                    to="/"
                    className="text-2xl font-bold tracking-tight hover:opacity-70 transition"
                >
                    Blog
                </Link>
                <div className="flex gap-5 text-sm">
                    <Link
                        to="/"
                        className="hover:text-white/60 transition"
                    >
                        Home
                    </Link>
                    <Link
                        to="/create"
                        className="hover:text-white/60 transition"
                    >
                        Create
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-white/60 transition"
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    )
}