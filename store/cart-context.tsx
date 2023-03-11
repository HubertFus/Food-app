import { createContext, useState, ReactNode } from "react";
import { products } from "./Data";
export interface state {
    category: number,
    id:number,
    quantity:number
}
export const CartContext = createContext({
  ids: [] as state[],
  addToCart: (category:number,id: number): void => {},
  decrementQuantityProducts: (category:number,id: number): void => {},
  value: 0 as number
});

export default function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartItemsIds, setCartItemsIds] = useState<Array<state>>([]);
  const [cartValue, setCartValue] = useState<number>(0);
  function addToCart(category:number,id: number): void {
    setCartValue(prev => prev + products[category].items[id].price)
    for(const i in cartItemsIds){
      if(cartItemsIds[i].category===category && cartItemsIds[i].id===id){
        let temp = [...cartItemsIds]
        temp[i].quantity++
        setCartItemsIds(temp)
        return
      }
    }

    setCartItemsIds((prev: Array<state>) => [...prev, {category:category,id:id,quantity:1}]);
  }
  
  function decrementQuantityProducts(category:number,id: number): void {
    for(const i in cartItemsIds){
      if(cartItemsIds[i].category===category && cartItemsIds[i].id===id){
        let temp = [...cartItemsIds];
        temp[i].quantity--;
        if(temp[i].quantity===0){
          temp = temp.filter((item: state) => item.category !== category || item.id!==id)
        }
        setCartItemsIds(temp)
        setCartValue(prev => prev - products[category].items[id].price)
        if(cartValue<0){
          setCartValue(0)
        }
        return
      }
    }
    
  }

  const value = {
    ids: cartItemsIds,
    addToCart:addToCart,
    decrementQuantityProducts:decrementQuantityProducts,
    value: cartValue
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
