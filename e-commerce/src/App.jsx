import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Carrito from "./pages/Carrito";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Login from "./pages/Login";
import About from "./pages/About";
import { ProductProvider } from "./context/ProductTotalPrice";
=======
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainPage from "./pages/MainPage";
// import Carrito from "./pages/Carrito";
>>>>>>> d589a6a7e3e4f9a3e93832636f35ea61971c0286

function App() {
  return (
    <BrowserRouter>
      <Navbar />
<<<<<<< HEAD
      <ProductProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ProductProvider>
=======
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
>>>>>>> d589a6a7e3e4f9a3e93832636f35ea61971c0286
      <Footer />
    </BrowserRouter>
  );
}

export default App;
