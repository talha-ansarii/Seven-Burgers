import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Hero";
import "./App.css";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
