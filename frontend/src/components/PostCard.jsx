import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  if (!post) {
    return <p className="text-center text-lg text-gray-500">Post is missing</p>;
  }

  const { title = "Untitled Post", author = "Unknown", createdAt, content = "No content available", image } = post;

  return (
    <div className="bg-[#1e1e1e] text-white rounded-lg shadow-md p-4 transition-transform hover:scale-105">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-3" />
      )}
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-400">
        By <span className="text-teal-300">{author}</span>.{" "}
        {createdAt ? new Date(createdAt).toLocaleDateString() : "Unknown Date"}
      </p>

      <p className="text-gray-300 mt-2">
        {content.length > 100 ? content.substring(0, 100) + "..." : content}
      </p>

      <Link to={`/posts/${post._id}`} className="text-teal-400 mt-3 inline-block hover:underline">
        Read More
      </Link>
    </div>
  );
}
