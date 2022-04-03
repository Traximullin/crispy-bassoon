import React from 'react';
import MainHeader from "./MainHeader/MainHeader";
import Delivery from "../Delivery/Delivery";


const Main: React.FC = () => {

    return (
        <div className="main">
            <div className="main__container container">
                <MainHeader />
                <div className="main__content">
                    {/*<Goods/>*/}
                    <Delivery/>
                </div>
            </div>
        </div>
    )
}

export default Main
