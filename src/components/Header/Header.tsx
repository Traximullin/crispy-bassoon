// Functional
import React from 'react'
// Assets
import {SVG} from "../../utils/svg";
import {Button} from "../index";

const Header: React.VFC = () => {
    
    return (
        <header className='header'>
            <div className='header__container container'>
                <h1>React</h1>
                <div className='header__address'>
                    <img src={SVG.sources.location} alt="location"/>
                    <span>Александровск-Саддам-Хусейн</span>
                </div>
                <div className='header__search'>
                    <input className='header__search_input' type="text" name="" id="" placeholder='Поиск бренда, товара, категории...'/>
                    <Button onClick={() => {}} src={SVG.sources.search} theme='light' padding={'0px 40px'}/>
                </div>
                <div className='header__basket'>
                    <img src={SVG.sources.basket} alt="basket" className='header__basket_icon'/>
                    <div className='header__basket_count'>10+</div>
                </div>
                <img className='header__avatar' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.2.1615777823.1638921600" alt="Avatar"/>
            </div>
        </header>
    )
}

export default Header

