import React from "react";
import Order from "./Order";
const Restaurant = () => {
  return (
    <div className="last-element">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="salads" />
        <Order orderType="pizzas" />
        <Order orderType="cakes" />
      </ul>
    </div>
  );
};

export default Restaurant;
