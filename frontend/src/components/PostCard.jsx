import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PostCard({ post }) {
  if (!post) {
    return <p className="text-center text-lg text-gray-500">Post is missing</p>;
  }

  const { _id, title, content, image, createdAt } = post;

  return (
    <div className="bg-[#1e1e1e] text-white rounded-lg shadow-md p-4 transition-transform hover:scale-105">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
      )}

      {/* Title */}
      <h2 className="text-xl font-semibold">{title || "Untitled Post"}</h2>

      {/* Date */}
      <p className="text-sm text-gray-400">
        {createdAt ? new Date(createdAt).toLocaleDateString() : "Unknown Date"}
      </p>

      {/* Content */}
      <p className="text-gray-300 mt-2">
        {content.length > 100 ? content.substring(0, 100) + "..." : content}
      </p>

      {/* Read More */}
      <div className="mt-3 text-right">
        <Link to={`/posts/${_id}`} className="text-teal-400 hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
}
