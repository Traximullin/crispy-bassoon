import React from "react";
import Button from "../Button/Button";

const Basket: React.FC = () => {
    return(
        <div className="basket--orders">
            <div className="basket--orders__header">
                <h3>Мои заказы</h3>
                <p>
                    Стоимость корзины:
                    1 185 000 ₽
                </p>
                <Button title="Тест" onClick={() => alert('!')}/>
            </div>
            <div className="basket--orders__list">
                <div className="basket--orders__item">
                    Смартфон Xiaomi Redmi Note 8 Pro 6/128GB, белый
                </div>
            </div>
        </div>
    )
}

export default Basket
