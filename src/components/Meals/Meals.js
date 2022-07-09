import React, { Fragment } from "react";
//import classes from "./Meals.module.css";

import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  <Fragment>
    <MealsSummary />
    <AvailableMeals />
  </Fragment>;
};

export default Meals;
