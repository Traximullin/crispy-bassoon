// Functional
import React from "react";
// Svg constant
import {SVG} from "../../utils/svg";
// Local component
import OrderList from "./OrdersList/OrderList";
// Global component
import {Button} from "../index";

const Basket: React.VFC = () => {

    return(
        <div className="basket--orders">
            <div className="basket--orders__header">
                <h3>Покупки</h3>
                <p>
                    Стоимость корзины:
                    <b>1 185 000 ₽</b>
                </p>
                <Button title="Оформить" onClick={() => alert('!')}/>
                <img src={SVG.purchases} alt=""/>
            </div>
            <OrderList />
        </div>
    )
}

export default Basket
