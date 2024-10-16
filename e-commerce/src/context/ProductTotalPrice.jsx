import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [total, setTotal] = useState(0)
  const [subTotals, setSubtotals] = useState(0)
  const catchTotal = (valorTotal)=>{
    setTotal(valorTotal)
  }
  
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

  return (
    <ProductContext.Provider value={{ total, setTotal, catchTotal, handleTotalUpdate}}>
      {children}
    </ProductContext.Provider>
  );
}