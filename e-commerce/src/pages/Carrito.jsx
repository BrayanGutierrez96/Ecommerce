
import { useState } from "react";
import CartTotal from "../components/CartTotal";
import NavLinks from "../components/NavLinks";
import TotalProducts from "../components/TotalProducts";
function Carrito() {
 const [total, setTotal] = useState(0)
const catchTotal = (valorTotal)=>{
  setTotal(valorTotal)
}
  return (
    <section className=" mx-32">
      <NavLinks/>
      <TotalProducts functionTotal = {catchTotal} />
      <CartTotal totalValue = {total}/>
    </section>
  );
}

export default Carrito;
