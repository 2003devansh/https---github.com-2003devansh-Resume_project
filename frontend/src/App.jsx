import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import UserProfile from "./components/UserProfile";
import AuthPage from "./components/AuthPage";

export default function App() {
  return (
    <>
      {/* Navbar should be present on all pages */}
      <Navbar />

      {/* Main content section */}
      <div className="min-h-screen bg-[#121212] text-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Featured />
                <PostList />
              </>
            }
          />
          <Route path="/create-post" element={<PostForm />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
