import React from 'react';
import CategoryList from "../CategoryList/CategoryList";

interface Title {
    title: string,
    settings: {} | TitleSettings,
    onClick: React.ReactEventHandler
}

interface TitleSettings {
    color: string
}

interface Props {
    title?: string,
    button?: {}
}

const MainHeader: React.VFC<Props> = ({title , button: Title}) => {

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
