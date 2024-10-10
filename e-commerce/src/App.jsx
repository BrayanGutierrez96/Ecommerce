import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Carrito from "./pages/Carrito";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Carrito from "./pages/Carrito"

/* jose condori */
import LogIn from './components/LogIn';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      <Footer />
    <Navbar/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/carrito" element={<Carrito/>}/>
      <Route path="/login" element={<LogIn/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
export default App

