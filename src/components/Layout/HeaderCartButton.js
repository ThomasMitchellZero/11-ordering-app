import React from "react";
import CartIcon from "../../assets/CartIcon"

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return <button>
    <span>{CartIcon}</span>
    <span></span>
    <span></span>
  </button>;
};

export default HeaderCartButton