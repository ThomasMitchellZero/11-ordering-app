import React from "react";
import { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  onAddItem: (item) => {},
  onRemoveItem: (id) => {},
});

export default CartContext;
