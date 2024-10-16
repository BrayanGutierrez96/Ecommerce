import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [subTotals, setSubtotals] = useState(0);
  const [data, setData] = useState([]);

  const handleTotalUpdate = (productId, subtotal) => {
    setSubtotals((prevSubtotals) => {
      const updatedSubtotals = {
        ...prevSubtotals,
        [productId]: subtotal,
      };
      const newTotal = Object.values(updatedSubtotals).reduce(
        (sum, item) => sum + item,
        0
      );
      setTotal(newTotal);
      return updatedSubtotals;
    });
  };
  const addProduct = (img, title, price) => {
    const info = { img, title, price };

    setData((prevContent) => {
      return [...prevContent, { product: info }];
    });
  };
  if (data !== "null") {
    localStorage.setItem("product", JSON.stringify(data));
  }
  return (
    <ProductContext.Provider
      value={{
        total,
        setTotal,
        handleTotalUpdate,
        data,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
