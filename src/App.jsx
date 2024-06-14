import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Hero";
import "./App.css";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Test from "./pages/Test";
import OurStory from "./pages/OurStory";
import Login from "./pages/Login";
import BlogList from "./pages/blog/BlogList";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/test" element={<Test />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<BlogList />} />
      </Routes>
    </div>
  );
}

export default App;
