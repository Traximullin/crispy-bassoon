// Functional
import React from 'react'

const Header: React.FC = () => {
    
    return (
        <header className='header'>
            <div className='header__container container'>
                <h1>React</h1>
                <div className='header__address'>
                    <div>svg</div>
                    <span>Александровск Садам Хуссейн</span>
                </div>
                <div className='header__search'>
                    <input className='header__search_input' type="text" name="" id="" placeholder='Поиск бренда, товара, категории...'/>
                    <button className='header__search_button' type="button">search</button>
                </div>
                <div className='header__basket'>
                    <div className='header__basket_count'>10+</div>

                </div>
                <img className='header__avatar' src="https://static.thenounproject.com/png/363640-200.png" alt="Avatar"/>
            </div>
        </header>
    )
}

export default Header

