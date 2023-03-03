import { createContext, useState, ReactNode } from "react";
export interface state {
    category: number,
    id:number,
}
export const CartContext = createContext({
  ids: [] as state[],
  addToCart: (category:number,id: number): void => {},
  removeFromCart: (category:number,id: number): void => {},
});

export default function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartItemsIds, setCartItemsIds] = useState<Array<state>>([]);

  function addToCart(category:number,id: number): void {
    setCartItemsIds((prev: Array<state>) => [...prev, {category:category,id:id}]);
    console.log(cartItemsIds)
  }

  function removeFromCart(category:number,id: number): void {
    setCartItemsIds((prev: Array<state>) => 
      prev.filter((item: state) => item.category !== category && item.id!==id)
    );
  }

  const value = {
    ids: cartItemsIds,
    addToCart:addToCart,
    removeFromCart:removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
