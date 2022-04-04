import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import {Basket, Delivery, Goods} from "../index";


const Main: React.FC = () => {

    return (
        <div className="main">
            <div className="main__container container">
                <Routes>
                    <Route element={<Goods/>} path='/'/>
                    <Route element={<Delivery/>} path='/delivery'/>
                    <Route element={<Basket/>} path='/basket'/>
                    <Route element={<div>Not found</div>} path='/*'/>
                </Routes>
            </div>
        </div>
    )
}

export default Main
