import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Hero";
import "./App.css";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
