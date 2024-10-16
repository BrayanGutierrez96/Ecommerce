import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductTotalPrice";

function ProductItem({ product }) {
  const {handleTotalUpdate} = useContext(ProductContext)
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(product.price); 
  const [active, setActive] = useState(false);

  const close = () => {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  const increase = () => {
    setQuantity((prevQuantity) => {
      return prevQuantity + 1;
    });
  };

  const decrease = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };
  
  useEffect(() => {
    const newSubtotal = product.price * quantity;
    setSubtotal(newSubtotal);
    handleTotalUpdate(product.id, newSubtotal);
  }, [quantity, product.price]);

  return (
    <div className="grid grid-cols-4 gap-16 border border-slate-100 shadow p-8 font-medium items-center">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-4" onClick={close}>
          <div className="flex ">
            <span
              className={`${
                active ? "absolute" : "hidden"
              } material-symbols-outlined  bg-red-500 text-white rounded-full cursor-pointer z-50 text-base px-1 font-bold `}
            >
              close
            </span>
            <img src={product.img} alt={product.title} className="w-20 z-0" />
          </div>
          <p>{product.title}</p>
        </button>
      </div>
      <p>${product.price}</p>
      <div>
        <div className="flex gap-2 w-4/12 border-2 border-gray-700 rounded justify-evenly p-1 items-center">
          <span className="cantidad ml-2 w-2/5">{quantity}</span>
          <div className="flex flex-col text-xs ">
            <button onClick={increase}>
              <span className="material-symbols-outlined cursor-pointer">
                keyboard_arrow_up
              </span>
            </button>
            <button onClick={decrease}>
              <span className="material-symbols-outlined cursor-pointer">
                keyboard_arrow_down
              </span>
            </button>
          </div>
        </div>
      </div>
      <p>${subtotal}</p>
    </div>
  );
}

export default ProductItem;
