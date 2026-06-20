import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await res.json();

      setTimeout(() => {
        setPosts(data);
        setLoading(false);
      }, 5000);
    };

    fetchPosts();
  }, []);

  const removePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <PostContext.Provider value={{ posts, loading, removePost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);