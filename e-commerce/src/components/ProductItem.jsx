import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../context/ProductTotalPrice";

function ProductItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { updateTotalProducts, updateTotalValue, totalValue, setTotalValue } =
    useContext(ProductContext);

  useEffect(() => {
    updateTotalProducts(quantity);
    updateTotalValue(product.price * quantity);
  }, [quantity]);

  const increaseCant = () => {
    setQuantity(quantity+1);
    setSubtotal(product.price * quantity)
  };

  const decreaseCant = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setSubtotal(product.price * quantity)
    }
  };

  const removeProduct = () => {
    console.log(subTotal);
    if (totalValue <= 0) {
      setTotalValue(0);
      return;
    }
    if (subTotal !== 0) {
      setSubtotal(0);
      updateTotalValue(-(product.price * quantity));
      updateTotalProducts(-quantity);
    }
  };

  const [subTotal, setSubtotal] = useState(product.price);

  return (
    <div className="grid grid-cols-4 gap-16 border border-slate-100 shadow p-8 font-medium items-center">
      <div className="flex items-center gap-4">
        <div>
          <span
            className="absolute material-symbols-outlined bg-red-500 text-white rounded-full cursor-pointer z-50 text-base px-1 font-bold "
            onClick={removeProduct}
          >
            close
          </span>
          <img src={product.img} alt={product.title} className="w-20 z-0" />
        </div>
        <p>{product.title}</p>
      </div>
      <p>${product.price}</p>
      <div>
        <div className="flex gap-2 w-3/12 border-2 border-gray-700 rounded justify-evenly p-1 items-center">
          <span className="cantidad ml-2 w-2/5">{quantity}</span>
          <div className="flex flex-col text-xs ">
            <button onClick={increaseCant}>
              <span className="material-symbols-outlined cursor-pointer">
                keyboard_arrow_up
              </span>
            </button>
            <button onClick={decreaseCant}>
              <span className="material-symbols-outlined cursor-pointer">
                keyboard_arrow_down
              </span>
            </button>
          </div>
        </div>
      </div>
      <p>${subTotal}</p>
    </div>
  );
}

export default ProductItem;
