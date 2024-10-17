import { Link } from "react-router-dom";
import logo from "../../assets/logo-about.jpeg"
function OurStory() {
  return (
    <>
      <div className="flex mx-32 my-12 gap-4">
        <Link className="text-gray-400 hover:underline" to="/">
          Home
        </Link>
        <span>/</span>
        <Link className="hover:underline">About</Link>
      </div>
      <div className=" w-full flex justify-end">
        <div className=" w-[92.5%] h-full flex  flex-row gap-10">
          <div className=" flex flex-col gap-6 justify-center w-[3000px]">
            <h1 className="text-black text-5xl font-semibold mb-3">
              Our Story
            </h1>
            <article>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </article>
            <article>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </article>
          </div>
          <div className="h-full">
            <img
              className="h-full"
              src={logo}
              alt="logo about"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStory;
