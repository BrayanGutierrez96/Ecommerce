import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Carrito from "./pages/Carrito";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainPage from "./pages/MainPage";
// import Carrito from "./pages/Carrito";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
