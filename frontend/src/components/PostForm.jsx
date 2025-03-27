import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/features/postSlice";
import { motion } from "framer-motion";

export default function PostForm() {
  const [post, setPost] = useState({ title: "", content: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(post));
    setPost({ title: "", content: "" });
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto bg-[#1e1e1e] p-6 rounded-lg shadow-2xl mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-teal-400 mb-5 text-center">
        Create a Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
          className="w-full p-3 text-lg bg-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-teal-400 outline-none transition-all duration-300 shadow-lg"
        />

        {/* Content Textarea */}
        <textarea
          placeholder="Write your post..."
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          required
          className="w-full h-40 p-3 text-lg bg-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-teal-400 outline-none transition-all duration-300 shadow-lg resize-none"
        />

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
          whileTap={{ scale: 0.95 }}
        >
          🚀 Publish Post
        </motion.button>
      </form>
    </motion.div>
  );
}
