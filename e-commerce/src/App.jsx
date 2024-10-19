import Navbar from "./components/nav/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Carrito from "./pages/Carrito";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact"
import { ProductProvider } from "./context/ProductTotalPrice";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ProductProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </ProductProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
