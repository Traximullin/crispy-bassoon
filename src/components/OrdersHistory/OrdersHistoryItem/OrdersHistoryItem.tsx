import React from 'react';
import {SVG} from "../../../utils/svg";
import {Info} from "../../index";

const OrdersHistoryItem = () => {

    return (
        <div className='orders-history__item'>
            <div className='orders-history__header'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/640px-Xiaomi_logo.svg.png' alt="basket" className='icon'/>
                <div>
                    <h3>Xiaomi</h3>
                    <span>21.12.2001</span>
                    <span>Подробнее</span>
                </div>
                <img src={SVG.interface.caret} alt=""/>
            </div>
            <div className='orders-history__main'>
                <Info title='Статус заказа' >
                    <strong>Оплачен/Завершен</strong>
                </Info>
                <Info title='Номер заказа' >
                    <strong>#664-333</strong>
                </Info>
                <Info title='Кол-во товаров' >
                    <strong>4 шт</strong>
                </Info>
                <Info title='Стоимость заказа' >
                    <strong>250 000р</strong>
                </Info>
                <Info title='Адрес доставки' >
                    <strong>ул. Коммунистическая д.1, стр.1</strong>
                </Info>
            </div>
        </div>
    );
};

export default OrdersHistoryItem;
