import { Link } from "react-router-dom";
import { Home, User, FileText, LogIn } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-5 fixed">
      <h2 className="text-2xl font-bold mb-6">My Blog</h2>
      <nav className="space-y-4">
        <Link to="/" className="flex items-center space-x-2 hover:text-teal-400">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link to="/about" className="flex items-center space-x-2 hover:text-teal-400">
          <User size={20} />
          <span>About</span>
        </Link>
        <Link to="/posts" className="flex items-center space-x-2 hover:text-teal-400">
          <FileText size={20} />
          <span>Posts</span>
        </Link>
        <Link to="/auth" className="flex items-center space-x-2 hover:text-teal-400">
          <LogIn size={20} />
          <span>Login</span>
        </Link>
      </nav>
    </aside>
  );
}
