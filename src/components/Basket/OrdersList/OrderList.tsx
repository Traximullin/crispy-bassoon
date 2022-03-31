// Functional
import React from "react";
// Local component
import OrderItem from "../OrderItem/OrderItem";

const OrderList: React.VFC = () => {

    return(
        <div className="basket--orders__list">
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
        </div>
    )
}

export default OrderList