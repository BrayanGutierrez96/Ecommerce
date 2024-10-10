import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const updateTotalProducts = (quantity) => {
    setTotalProducts((prevTotal) => prevTotal + quantity);
  };

  const updateTotalValue = (amount) => {
        setTotalValue((prevValue) => prevValue + amount);
  };

  return (
    <ProductContext.Provider value={{ totalProducts, updateTotalProducts, totalValue, updateTotalValue,setTotalValue }}>
      {children}
    </ProductContext.Provider>
  );
}