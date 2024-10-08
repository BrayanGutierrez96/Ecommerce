import { useState } from "react";
import { Link } from "react-router-dom";
function Carrito() {
  const [numero, setNumero] = useState(0);

  const numeroRandom = () => {
    alert("clic")
    return setNumero(Math.floor(Math.random() * 2) );
  };

  return (
    <div className="grid ">
      <Link className="text-gray-400">Home</Link>
      <span>/</span>
      <Link>Cart</Link>
      <button className="border" onClick={numeroRandom}>Elegir equipo</button>
      <h1>Equipo numero: {numero} </h1>
    </div>
  );
}

export default Carrito;
