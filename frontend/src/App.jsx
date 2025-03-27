import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./components/AuthPage"; // Corrected Import
import Navbar from "./components/Navbar"; // Keep Navbar across pages
import PostForm from "./components/PostForm"; // Form to create posts

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/auth" element={<AuthPage />} /> {/* Handles Login & Signup */}
        <Route path="/create-post" element={<PostForm />} /> {/* Post Form Page */}
      </Routes>
    </>
  );
}
