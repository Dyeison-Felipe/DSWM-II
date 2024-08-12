import { BrowserRouter, Route, Routes } from "react-router-dom";
import IdFilms from "../components/IdFilms";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Voted from "../pages/MostVoted";
import Home from "../pages/Home";
export default function route() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top_voted" element={<Voted />} />
        <Route path="/film/:id" element={<IdFilms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
