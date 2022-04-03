import React from 'react';
import GoodsItem from "./GoodsItem/GoodsItem";
import {Button} from "../index";
import {SVG} from "../../utils/svg";
import CategoryList from "../Main/CategoryList/CategoryList";
import MainHeader from "../Main/MainHeader/MainHeader";


const Goods: React.FC = () => {
    return (
        <div className="goods">
            <MainHeader title="Категории товаров" button={[
                {title: 'Настройки', onClick: () => console.log(1)},
                {title: 'Фильтры', onClick: () => console.log(2)},
                {title: 'Темы', onClick: () => console.log(3)},
            ]}>
                <CategoryList/>
            </MainHeader>
            <div className="goods__wrapper">
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
            </div>
            <div className='goods__button'>
                <Button title='Показать больше товаров' onClick={() => {}} theme='light' padding='16px 44px' src={SVG.sources.basket}/>
            </div>
        </div>
    );
};

export default Goods;
