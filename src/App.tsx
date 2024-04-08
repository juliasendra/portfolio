import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Greetings from "./components/Greetings";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/greetings" element={<Greetings />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
