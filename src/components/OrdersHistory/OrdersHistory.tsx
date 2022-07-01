import React from 'react';
import CategoryList from "../Main/CategoryList/CategoryList";
import MainHeader from "../Main/MainHeader/MainHeader";
import OrdersHistoryItem from "./OrdersHistoryItem/OrdersHistoryItem";

interface OrdersHistoryProps {

}

const OrdersHistory: React.VFC<OrdersHistoryProps> = () => {

    return (
        <div className='orders-history'>
            <MainHeader title="История заказов"/>
            <div className='orders-history__container'>
                <OrdersHistoryItem/>
                <OrdersHistoryItem/>
                <OrdersHistoryItem/>
            </div>
        </div>
    );
};

export default OrdersHistory;
