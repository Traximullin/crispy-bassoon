// Functional
import React from 'react'
// Styles
import './Footer.scss'

const Footer: React.FC = () => {

    return(
        <footer>
            <div className="header-footer">
                <h1>React-store</h1>
                <div className="our__contacts">
                    <div>
                        Присоединяйтесь к нам
                    </div>
                    <div>
                        Устанавливайте приложение
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <ul>
                    <li>&#169; Sionic</li>
                    <li>Правовая информация</li>
                    <li>Политика конфиденциальности</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer