import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const handleClick = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton handleClick={handleClick} />
    </li>
  );
};

export default Order;
