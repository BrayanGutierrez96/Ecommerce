import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [contract, setContract] = useState(true);

  const navigation = () => {
    navigate("/");
  };

  const menu = () => {
    const list = document.querySelector("#list");
    if (contract === true) {
      <span className="material-symbols-outlined">menu</span>;
      list.style.display = "none";
    }
  };
  return (
    <nav className="grid border-b-2 pb-4 ">
      <div className="bg-black grid grid-cols-1 px-2 pt-4 pb-1 sm:px-32 sm:py-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="grid col-span-1 items-center justify-center sm:flex lg:justify-end sm:col-span-1 lg:col-span-2">
          <div className="grid text-white text-xs col-span-1 sm:col-span-2 lg:justify-end lg:text-base">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <div className="flex justify-center text-xs lg:text-sm text-white pl-3 sm:justify-end  ">
            <Link className="font-bold border-b w-auto">ShopNow</Link>
          </div>
        </div>
        <div className="flex text-white text-xs items-center justify-end lg:text-base">
          English
          <span className="sm:pt-1 material-symbols-outlined">
            keyboard_arrow_down
          </span>
        </div>
      </div>

      <div className="grid grid-cols-5 mt-4 mx-32">
        <button
          className="flex w-32 items-center justify-center  p-1"
          onClick={navigation}
        >
          <h1 className="grid font-bold text-2xl items-center">Exclusive</h1>
        </button>
        <ul
          id="list"
          className="grid grid-cols-5  col-span-3 items-center pt-2"
        >
          <li className="col-span-1 font-medium">
            <Link className="hover:border-b-2 hover:border-slate-400 ">
              Home
            </Link>
          </li>
          <li className="col-span-1 font-medium">
            <Link className="hover:border-b-2 hover:border-slate-400 ">
              Contact
            </Link>
          </li>
          <li className="col-span-1 font-medium">
            <Link
              to={"/about"}
              className="hover:border-b-2 hover:border-slate-400 "
            >
              About
            </Link>
          </li>
          <li className="col-span-1 font-medium">
            <Link className="hover:border-b-2 hover:border-slate-400">
              Sing Up
            </Link>
          </li>
        </ul>
        <div className="flex  justify-between">
          <label
            htmlFor="search"
            className="flex justify-between w-3/4 px-4 items-center bg-gray-200 rounded cursor-pointer"
          >
            <input
              id="search"
              className="bg-transparent text-xs w-4/5 focus:outline-none"
              type="text"
              placeholder="What are you looking for?"
            />
            <button
              className="flex items-center active:bg-black active:text-white rounded"
              onClick={() => {
                console.log("clic");
              }}
            >
              <span className="material-symbols-outlined">search</span>
            </button>
          </label>
          <div className="flex items-center  pl-6  gap-4">
            <Link>
              <span className="text-3xl cursor-pointer">♡</span>
            </Link>
            <Link to={"/carrito"} className="flex items-center">
              <span className="material-symbols-outlined cursor-pointer">
                shopping_cart
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
