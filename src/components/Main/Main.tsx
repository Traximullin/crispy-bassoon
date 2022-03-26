import React from 'react';
import MainHeader from "./MainHeader/MainHeader";

const Main: React.FC = () => {

    return (
        <div className="main">
            <div className="main__container container">
                <MainHeader/>
                <div className="main__content">
                    content
                </div>
            </div>
        </div>
    )
}

export default Main
