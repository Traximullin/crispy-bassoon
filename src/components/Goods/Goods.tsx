import React from 'react';
import GoodsItem from "./GoodsItem/GoodsItem";

const Goods: React.FC = () => {
    return (
        <div className="goods">
            <GoodsItem/>
            <GoodsItem/>
            <GoodsItem/>
            <GoodsItem/>
            <GoodsItem/>
        </div>
    );
};

export default Goods;
