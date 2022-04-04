// Functional
import React from 'react'
import {Link} from 'react-router-dom'
// Assets
import {SVG} from "../../utils/svg";
import {Button} from "../index";

const Header: React.VFC = () => {
    
    return (
        <header className='header'>
            <div className='header__container container'>
                <Link to='/'>
                    <h1>React</h1>
                </Link>
                <div className='header__address'>
                    <img src={SVG.interface.location} alt="location"/>
                    <span>Александровск-Саддам-Хусейн</span>
                </div>
                <div className='header__search'>
                    <input className='header__search_input' type="text" name="" id="" placeholder='Поиск бренда, товара, категории...'/>
                    <Button onClick={() => {}} src={SVG.interface.search} theme='light' padding={'0px 40px'}/>
                </div>
                <Link className='header__basket' to={'/basket'}>
                    <img src={SVG.interface.basket} alt="basket" className='header__basket_icon'/>
                    <div className='header__basket_count'>10+</div>
                </Link>
                <img className='header__avatar' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.2.1615777823.1638921600" alt="Avatar"/>
            </div>
        </header>
    )
}

export default Header

