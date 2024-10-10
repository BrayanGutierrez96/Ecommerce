import { useState } from "react";
import { data } from "../data";

function TotalProducts({ total }) {
  const [cant, setCant] = useState(1);

  const increaseCant = (e) => {
    const elemento = document.querySelectorAll(".cantidad");
    elemento.forEach((span) => {
      if (span.id === e.target.id) {
        span.textContent ++

      }
    });

  };

  const decreaseCant = (e) => {
    const elemento = document.querySelectorAll(".cantidad");
    elemento.forEach((span) => {
      if (span.id === e.target.id) {
        if(span.textContent != "0"){
            span.textContent--;
        }else{
            span.textContent = "0"
        }
      }
    });
  };

  return (
    <div className="flex flex-col gap-12 ">
      <div className=" grid grid-cols-4 gap-16 border border-slate-100 shadow p-8 font-medium">
        <h5>Product</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
      </div>

      {data.map((product) => {
        return (
          <div
            key={product.id}
            className=" grid grid-cols-4 gap-16 border border-slate-100 shadow p-8 font-medium items-center"
          >
            <div className="flex items-center gap-4">
              <div>
                <span className="absolute material-symbols-outlined bg-red-500 text-white rounded-full cursor-pointer z-50 text-base px-1 font-bold ">
                  close
                </span>
                <img src={product.img} alt="" className="w-20 z-0" />
              </div>
              <p>product.title</p>
            </div>
            <p>${product.price}</p>
            <div>
              <div className=" flex gap-2 w-3/12 border-2 boder-gray-700 rounded justify-evenly p-1 items-center">
                <span id={product.id} className="cantidad ml-2 w-2/5">
                  {cant}
                </span>

                <div className=" flex flex-col text-xs ">
                  <button
                    onClick={(e) => {
                      increaseCant(e);
                    }}
                  >
                    <span
                      id={product.id}
                      className="material-symbols-outlined cursor-pointer"
                    >
                      keyboard_arrow_up
                    </span>
                  </button>
                  <button
                    onClick={(event) => {
                      decreaseCant(event);
                    }}
                  >
                    <span
                      id={product.id}
                      className="material-symbols-outlined cursor-pointer"
                    >
                      keyboard_arrow_down
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <p>${product.price * cant}</p>
          </div>
        );
      })}

      <div className="flex justify-between">
        <button className="border py-4 w-60 hover:bg-black hover:text-white px-8 text-lg font-medium rounded border-gray-600">
          Return to Shop
        </button>
        <button className="border py-4 w-60 hover:bg-black hover:text-white px-8 text-lg font-medium rounded border-gray-600">
          Update Cart
        </button>
      </div>
    </div>
  );
}

export default TotalProducts;
