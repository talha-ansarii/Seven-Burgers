import {  Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Test from "./pages/Test";
import OurStory from "./pages/OurStory";
import Login from "./pages/Login";
import BlogList from "./pages/blog/BlogList";
import PastBlogs from "./pages/blog/PastBlogs";
import WriteBlog from "./pages/blog/WriteBlog";
import Blog from "./pages/blog/Blog";
import EditBlog from "./pages/blog/EditBlog";
import { Suspense } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  return (
    <div className="w-full">
    <Suspense fallback={<LoadingScreen/>}>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/test" element={<Test />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/pastblogs" element={<PastBlogs />} />
        <Route path="/blogs/writeblog" element={<WriteBlog />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/blogs/editblog/:id" element={<EditBlog />} />
      </Routes> 
    </Suspense>
    </div>
  );
}

export default App;
