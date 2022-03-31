import React from 'react';
import MainHeader from "./MainHeader/MainHeader";
import Goods from "../Goods/Goods";


const Main: React.FC = () => {

    return (
        <div className="main">
            <div className="main__container container">
                <MainHeader />
                <div className="main__content">
                    <Goods/>
                </div>
            </div>
        </div>
    )
}

export default Main
