import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [data, setData] = useState([]);
  console.log(localStorage.getItem("product"))

  const updateTotalProducts = (quantity) => {
    setTotalProducts((prevTotal) => prevTotal + quantity);
  };

  const updateTotalValue = (amount) => {
    setTotalValue((prevValue) => prevValue + amount);
  };

  const addProduct = (img, title, price) => {
    const info = { img, title, price };

    setData((prevContent) => {
        return [...prevContent, { "product": info }];
    });
  };
  if(data !== "null"){
    localStorage.setItem("product", JSON.stringify(data))

  }
  return (
    <ProductContext.Provider
      value={{
        totalProducts,
        updateTotalProducts,
        totalValue,
        updateTotalValue,
        setTotalValue,
        data,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
