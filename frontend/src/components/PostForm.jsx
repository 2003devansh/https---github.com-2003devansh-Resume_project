import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { fetchPosts } from "../redux/features/postSlice";

export default function PostForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/posts", formData);
      dispatch(fetchPosts());
      setFormData({ title: "", content: "" });
    } catch (error) {
      console.error("Post creation failed", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212]">
      <div className="max-w-lg w-full bg-[#1f1f1f] p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Create a Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Input */}
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full p-3 border border-gray-600 rounded bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter post title..."
            required
          />
          {/* Post Content */}
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full p-3 border border-gray-600 rounded bg-[#2a2a2a] text-white h-40 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Write your post..."
            required
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-lg font-semibold hover:bg-teal-600 transition-all"
          >
            Publish Post
          </button>
        </form>
      </div>
    </div>
  );
}
