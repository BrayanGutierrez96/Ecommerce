import ProductsCard from "./ProductsCard";
import { products } from "../data";
import Clock from "./Clock";
function Catalog() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex mt-32  items-center gap-4">
        <div className="bg-red-500 w-8 h-16 rounded "></div>
        <div className="text-red-500 font-semibold text-lg">Today`s</div>
      </div>
      <div className="flex  w-content items-center">
        <div className="w-1/5">
          <h5 className="font-semibold text-4xl tracking-wider">Flash Sales</h5>
        </div>
        <Clock />
        <div className="flex justify-end items-center w-1/5 gap-8">
          <span className="material-symbols-outlined rounded-full bg-gray-200 p-1 cursor-pointer ">
            arrow_back
          </span>
          <span className="material-symbols-outlined rounded-full bg-gray-200 p-1 cursor-pointer">
            arrow_forward
          </span>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-10">
        {products.map((product) => {
          return (
            <ProductsCard
              key={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              rate={product.rate}
              off={product.off}
              id={product.id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Catalog;
