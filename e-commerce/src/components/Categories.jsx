import { Link } from "react-router-dom";
import Carrousel from "./Carrousel";
import { useState } from "react";

function Categories() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <section className="grid  sm:grid-cols-8">
      <aside className="grid  sm:grid-cols-1 sm:col-span-1">
        <span className={`${active ? "hidden" : "block"} sm:hidden material-symbols-outlined pt-4`}>
          <button onClick={toggleMenu}>keyboard_arrow_down</button>
        </span>
        <span className={`${active ? "block" : "hidden"} sm:hidden material-symbols-outlined pt-4`}>
          <button onClick={toggleMenu}>keyboard_arrow_right</button>
        </span>
        {active ? (
          <ul className="z-50 mt-4 flex flex-col  w-1/2 gap-4">
            <li className="border-b border-gary-100">
              <Link className="text-lg font-medium"> Woman’s Fashion</Link>
            </li>
            <li className="border-b  border-gary-100">
              <Link className="text-lg font-medium">Men’s Fashion</Link>
            </li>
            <li className="border-b  border-gary-100">
              <Link className="text-lg font-medium">Home & Lifestyle</Link>
            </li>
            <li className="border-b  border-gary-100">
              <Link className="text-lg font-medium">Sports & Outdoor</Link>
            </li>
            <li className="border-b  border-gary-100">
              <Link className="text-lg font-medium">Groceries & Pets</Link>
            </li>
            <li className="border-b  border-gary-100">
              <Link className="text-lg font-medium">Health & Beauty</Link>
            </li>
          </ul>
        ) : null}
        <div className="hidden  sm:flex sm:flex-col pt-12 gap-6 border-r-2">
          <Link className="flex col-span-1 justify-between text-lg font-medium w-11/12">
            Woman’s Fashion
            <span className="hidden sm:block pt-1 text-base material-symbols-outlined">
              arrow_forward_ios
            </span>
          </Link>
          <Link className="flex justify-between text-lg font-medium w-11/12">
            Men’s Fashion
            <span className="hidden sm:block pt-1 text-base material-symbols-outlined">
              arrow_forward_ios
            </span>
          </Link>
          <Link className="text-lg font-medium sm:w-11/12">Electronics</Link>
          <Link className="text-lg font-medium sm:w-11/12">
            Home & Lifestyle
          </Link>
          <Link className="text-lg font-medium sm:w-11/12">Medicine</Link>
          <Link className="text-lg font-medium sm:w-11/12">
            Sports & Outdoor
          </Link>
          <Link className="text-lg font-medium sm:w-11/12">Baby’s & Toys</Link>
          <Link className="text-lg font-medium sm:w-11/12">
            Groceries & Pets
          </Link>
          <Link className="text-lg font-medium sm:w-11/12">
            Health & Beauty
          </Link>
        </div>
      </aside>
      <Carrousel menu={active} />
    </section>
  );
}

export default Categories;
