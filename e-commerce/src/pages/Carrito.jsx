
import CartTotal from "../components/CartTotal";
import NavLinks from "../components/NavLinks";
import TotalProducts from "../components/TotalProducts";

function Carrito() {
  return (
    <section className=" mx-32">
      <NavLinks/>
      <TotalProducts />
      <CartTotal/>
    </section>
  );
}

export default Carrito;
