// Functional
import React from 'react'
import footer from "../Footer/Footer";



const Header: React.FC = () => {
    
    return (
        <header className='header'>
            <div className='header__container container'>
                <h1>React</h1>
                <div className='header__address'>address</div>
                <div className='header__search'>
                    <input type="text" name="" id="" placeholder='asd'/>
                    <button type="button">search</button>
                </div>
                <div className='header__basket'>bin</div>
                <img className='header__avatar' src="https://static.thenounproject.com/png/363640-200.png" alt="Avatar"/>
            </div>
        </header>
    )
}

export default Header

