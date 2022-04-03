import React from 'react';
import GoodsItem from "./GoodsItem/GoodsItem";
import {Button} from "../index";
import {SVG} from "../../utils/svg";


const Goods: React.FC = () => {
    return (
        <div className="goods">
            <div className="goods__wrapper">
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
            </div>
            <Button title='Показать больше товаров' onClick={() => {}} theme='light' padding='16px 44px' src={SVG.sources.basket}/>
        </div>
    );
};

export default Goods;
