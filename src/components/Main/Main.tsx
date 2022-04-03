import React from 'react';
import MainHeader from "./MainHeader/MainHeader";
import Goods from "../Goods/Goods";
import CategoryList from "./CategoryList/CategoryList";


const Main: React.FC = () => {

    return (
        <div className="main">
            <div className="main__container container">
                <MainHeader title="Категории товаров" button={[
                    {title: 'Настройки', onClick: () => console.log(1)},
                    {title: 'Фильтры', onClick: () => console.log(2)},
                    {title: 'Темы', onClick: () => console.log(3)},
                ]}>
                    <CategoryList/>
                </MainHeader>
                <div className="main__content">
                    <Goods/>
                </div>
            </div>
        </div>
    )
}

export default Main
