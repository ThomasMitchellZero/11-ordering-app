import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = (props) => {
    
    const addItemToCartHandler = (item) => {};
  
    const removeItemFromCartHandler = (id) => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        onAddItem: addItemToCartHandler,
        onRemoveItem: removeItemFromCartHandler,

    }

//    const [items, setItems] = useState([]);
  
    return (
      <CartContext.Provider
        value={cartContext}
      >
        {props.children}
      </CartContext.Provider>
    );
  };

  export default CartProvider