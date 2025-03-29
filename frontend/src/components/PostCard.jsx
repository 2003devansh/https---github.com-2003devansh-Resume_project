import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { likePost } from "../redux/features/postSlice";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function PostCard({ post }) {
  const dispatch = useDispatch();

  if (!post) {
    return <p className="text-center text-lg text-gray-500">Post is missing</p>;
  }

  const { _id, title, creator, createdAt, message, selectedFile, tags, likeCount } = post;

  return (
    <div className="bg-[#1e1e1e] text-white rounded-lg shadow-md p-4 transition-transform hover:scale-105">
      {/* Image */}
      {selectedFile && (
        <img
          src={selectedFile}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
      )}

      {/* Title */}
      <h2 className="text-xl font-semibold">{title || "Untitled Post"}</h2>

      {/* Author & Date */}
      <p className="text-sm text-gray-400">
        By <span className="text-teal-300">{creator || "Unknown"}</span>.{" "}
        {createdAt ? new Date(createdAt).toLocaleDateString() : "Unknown Date"}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-700 px-2 py-1 text-xs rounded-lg">
            #{tag}
          </span>
        ))}
      </div>

      {/* Message */}
      <p className="text-gray-300 mt-2">
        {message.length > 100 ? message.substring(0, 100) + "..." : message}
      </p>

      {/* Like Button */}
      <div className="flex justify-between items-center mt-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => dispatch(likePost(_id))}
          className="flex items-center gap-2 text-teal-400"
        >
          <FaHeart className="text-red-500" />
          {likeCount}
        </motion.button>

        {/* Read More */}
        <Link
          to={`/posts/${_id}`}
          className="text-teal-400 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
