import { useState } from "react";
import { Link } from "react-router-dom";
function Carrito() {
  const [cant, setCant] = useState(1);

  const changeCant = (event) => {
    if (event.target.id === "1") {
      return setCant(cant + 1);
    }
    if(cant !== 0){
      return setCant(cant - 1);
    } 
    
  };

  return (
    <>
      <div className="flex mx-32 my-12 gap-4">
        <Link className="text-gray-400 hover:underline" to="/">
          Home
        </Link>
        <span>/</span>
        <Link className="hover:underline">Cart</Link>
      </div>
      <div className="flex flex-col gap-12 mx-32 ">
        <div className=" grid grid-cols-4 gap-16 border border-slate-100 shadow p-8 font-medium">
          <h5>Product</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Subtotal</h5>
        </div>
        <div className=" grid grid-cols-4 gap-16 border border-slate-100 shadow p-8 font-medium items-center">
          <div className="flex items-center gap-4">
            <div>
              <span className="absolute material-symbols-outlined bg-red-500 text-white rounded-full cursor-pointer z-50 text-base px-1 font-bold ">
                close
              </span>
              <img src="monitor.png" alt="" className="w-20 z-0" />
            </div>
            <p>LCD Monitor</p>
          </div>
          <p>$650</p>
          <div>
            <div className=" flex gap-2 w-3/12 border-2 boder-gray-700 rounded justify-evenly p-1 items-center">
              {cant}
              <div className=" flex flex-col text-xs ">
                <button
                  onClick={(event) => {
                    changeCant(event);
                  }}
                >
                  <span
                    id="1"
                    className="material-symbols-outlined cursor-pointer"
                  >
                    keyboard_arrow_up
                  </span>
                </button>
                <button
                  onClick={(event) => {
                    changeCant(event);
                  }}
                >
                  <span className="material-symbols-outlined cursor-pointer">
                    keyboard_arrow_down
                  </span>
                </button>
              </div>
            </div>
          </div>
          <p>$650</p>
        </div>
        <div className="flex justify-between">
          <button className="border py-4 w-60 hover:bg-black hover:text-white px-8 text-lg font-medium rounded border-gray-600">
            Return to Shop
          </button>
          <button className="border py-4 w-60 hover:bg-black hover:text-white px-8 text-lg font-medium rounded border-gray-600">
            Update Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Carrito;
