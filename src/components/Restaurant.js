import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="last-element">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="salads" startFrom={0} increment={1} />
        <Order orderType="pizzas" startFrom={0} increment={1} />
        <Order orderType="cakes" startFrom={0} increment={1} />
        <Order orderType="beberages" startFrom={0} increment={1} />
      </ul>
    </div>
  );
};

export default Restaurant;
