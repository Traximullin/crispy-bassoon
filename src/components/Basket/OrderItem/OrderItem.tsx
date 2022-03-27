// Functional
import React from "react";
// Global components
import {CounterButton} from "../../index";

const OrderItem = () => {
    return(
        <div className="basket--orders__item">
            <img
                width={60}
                height={63}
                src="https://tehnoteca.ru/img/1657/1656860/xiaomi_redmi_note_8_pro_64gb_10.jpg"
                alt="avatar-orders-item"
            />
            <p>Смартфон Xiaomi Redmi Note 8 Pro 6/128GB, белый</p>
            <CounterButton count={20}/>
            <div>
                от 350 000 ₽
            </div>
            <div>bin</div>
        </div>
    )
}

export default OrderItem