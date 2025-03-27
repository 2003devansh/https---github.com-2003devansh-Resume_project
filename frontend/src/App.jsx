import { Routes, Route } from "react-router-dom";

// Global Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero"; // Hero Component

// Feature Components
import AuthPage from "./components/AuthPage"; // Login & Signup
import PostForm from "./components/PostForm"; // Create Post Form
import PostList from "./components/PostList"; // Display Posts

export default function App() {
  return (
    <div className="bg-[#121212] text-white min-h-screen flex flex-col">
      {/* Navbar - Fixed at the top */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto w-full mt-5 px-4 p-6 bg-[#181818] rounded-xl shadow-lg">
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Hero Component as HomePage */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/create-post" element={<PostForm />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
      </main>

      {/* Footer - Stays at bottom */}
      <Footer />
    </div>
  );
}
