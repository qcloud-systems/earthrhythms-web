import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Tides from "./pages/Tides";
import Cycles from "./pages/Cycles";
import EarthRhythms from "./pages/EarthRhythms";
import Audio from "./pages/Audio";
import About from "./pages/About";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tides" element={<Tides />} />
        <Route path="/cycles" element={<Cycles />} />
        <Route path="/earthrhythms" element={<EarthRhythms />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}
