import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// the reducer is outside the component because it doesn't depend on anything inside the component context, and having it outside means it doesn't get re-evaluated with the component, improving speed.

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedArray = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {items: updatedArray,
    totalAmount: updatedTotalAmount}
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    onAddItem: addItemToCartHandler,
    onRemoveItem: removeItemFromCartHandler,
  };

  //    const [items, setItems] = useState([]);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
