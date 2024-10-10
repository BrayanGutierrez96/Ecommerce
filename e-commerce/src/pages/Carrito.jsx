
import { useState } from "react";
import CartTotal from "../components/CartTotal";
import NavLinks from "../components/NavLinks";
import TotalProducts from "../components/TotalProducts";
function Carrito() {
  const [total, setTotal] = useState(0)
  function getTotalProducts (totalProduct){
    setTotal(totalProduct)
  }

  

  return (
    <section className=" mx-32">
      <NavLinks/>
      <TotalProducts total = {getTotalProducts}/>
      <CartTotal/>
    </section>
  );
}

export default Carrito;
