import React from 'react';
import {SVG} from "../../../utils/svg";

const OrdersHistoryItem = () => {
    return (
        <div className='orders-history__item'>
            <div className='orders-history__header'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/640px-Xiaomi_logo.svg.png' alt="basket" className='icon'/>
                <div>
                    <p>header</p>
                    <span>a</span>
                    <span>b</span>
                </div>
                <img src={SVG.interface.caret} alt=""/>
            </div>
            <div className='orders-history__main'>
                order data
            </div>
        </div>
    );
};

export default OrdersHistoryItem;
