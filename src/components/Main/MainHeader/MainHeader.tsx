import React from 'react';
import CategoryList from "../CategoryList/CategoryList";

const MainHeader = () => {
    return (
        <div className="main__header">
            <div className="main__header__top">
                <h3>Категории товаров</h3>
                <span>Настройки</span>
            </div>
            <div className="main__header__bottom">
                <CategoryList/>
            </div>
        </div>
    );
};

export default MainHeader;
