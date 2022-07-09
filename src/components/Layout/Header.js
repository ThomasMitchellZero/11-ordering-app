import React, { Fragment } from "react";
import "./Header.module.css";
import mealsImage from "../../assets/meals.jpg"
import styles from "./Header.module.css"

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="MealImage"/>
      </div>
    </Fragment>
  );
};

export default Header;
