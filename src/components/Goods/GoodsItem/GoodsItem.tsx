import React from 'react';
import Button from "../../Button/Button";

const GoodsItem: React.FC = () => {
    return (
        <div className="goods__item">
            <img className="goods__image" src="https://m.onlinetrade.ru/img/items/m/protsessor_amd_ryzen_5_3600_am4_box_1130238_1.jpg" alt="good-image"/>
            <p className="goods__title">Смартфон Xiaomi Redmi Note 8 Pro 6/128GB, белый</p>
            <div className="goods__prices">
                <h3 className="goods__current-price">от 350 000 P</h3>
                <span className="goods__past-price">450 000p</span>
                <span className="goods__sale">10%</span>
            </div>
            <Button onClick={() => {}} theme={'white w-100'}>Добавит в корзину</Button>
        </div>
    );
};

export default GoodsItem;
