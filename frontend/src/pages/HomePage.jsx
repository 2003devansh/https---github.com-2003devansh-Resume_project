import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <div className="container mx-auto px-4 py-6">
                <Featured />
                <PostList />
            </div>
            <Footer />
        </div>
    );
}
