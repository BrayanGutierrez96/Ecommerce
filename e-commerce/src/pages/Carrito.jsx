import { Link } from "react-router-dom";
function Carrito() {


  return (
    <div className="flex mx-32 my-12 gap-4">
    <Link className="text-gray-400">Home</Link>
    <span>/</span>
    <Link>Cart</Link>
    <div className="grid">
      <h2>Example</h2>
    </div>
  </div>
  );
}

export default Carrito;
