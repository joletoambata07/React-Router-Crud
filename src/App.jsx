import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import CreatePost from "./pages/CreatePost.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import EditPost from "./pages/EditPost.jsx";
import Navbar from "./components/NavBar.jsx";

export default function App() {
  const [posts, setPosts] = useState(() => {
  try {
    const savedData = localStorage.getItem("posts");
    return savedData ? JSON.parse(savedData) : [];
  } catch (error) {
    return [];
  }
});
  
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  function addPost(post) {
    setPosts(prev => [
      ...prev,
      post
    ]);
  }

  function deletePost(id) {
    setPosts(prev => prev.filter(post => post.id !== id));
  }

  function updatePost( id, newTitle, newContent, newAuthor ) {
    const updatedPost = {
      id,
      title: newTitle,
      content: newContent,
      author: newAuthor
    };

    setPosts(prev => 
      prev.map(post => (
        post.id === Number(id) ?
        {...updatedPost}
        : 
          post
      ))
    );
  }
  return (
    <>
    <div className="min-h-screen bg-black text-white">
    <Navbar />
    <main className="pt-20">
      <Routes>
        <Route 
          path="/"
          element={<Home 
            posts={posts}
            deletePost={deletePost}
            />}
        />
        <Route
          path="/create"
          element={<CreatePost addPost={addPost} />}
        />
        <Route 
          path="/posts/:id"
          element={<PostDetails posts={posts}/>}
        />
        <Route 
          path="/about"
          element={<About />}
        />
        <Route
          path="/edit/:id"
          element={<EditPost 
            posts={posts}
            updatePost={updatePost}
          />}
        />
        <Route 
          path="*"
          element={<NotFound />}
        ></Route>
      </Routes>
      </main>
      </div>
    </>
  )
}