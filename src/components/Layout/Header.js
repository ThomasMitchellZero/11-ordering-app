import React, { Fragment } from "react";
import "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src="meals.jpg" alt="MealImage" />
      </div>
    </Fragment>
  );
};

export default Header;

