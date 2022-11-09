import React, { useState } from "react";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  const handleClick = () => {
    setOrders(orders + 1);
  };
  return (
    <div className="last-element">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}{" "}
          <button onClick={handleClick} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
