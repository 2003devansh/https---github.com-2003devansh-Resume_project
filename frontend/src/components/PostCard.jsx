import { Link } from "react-router-dom";

export default function PostCard({post}){
    return(
        <div className="bg-[#1e1e1e] text-white rounded-lg shadow-md p-4 transition-transform hover:scale-105">
            {post.image && (
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md mb-3" />
            )}
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-400">
                By <span className="text=teal-300">{post.author}</span>.{" "}
                {new Date(post.createAt).toLocaleDateString()}
            </p>

            <p className="text-gray-300 mt-2">
                {
                    post.content.length > 100 ? post.content.substring(0,100) + "..." : post.content 
                }
            </p>

            <Link to={`/posts/${post._id}`} className="text-teal-400 mt-3 inline-block hover:underline">
            Read More
            </Link>
        </div>
    )

}