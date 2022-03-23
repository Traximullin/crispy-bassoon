// Functional
import React from 'react'

const Footer: React.FC = () => {

    return(
        <footer className="footer">
            <div className="footer__header">
                <h1>React</h1>
                <div className="footer__contacts">
                    <div className="footer__contacts_item">
                        Присоединяйтесь к нам
                        <div className="footer__sources">

                        </div>
                    </div>
                    <div className="footer__contacts_item">
                        Устанавливайте приложение
                        <div className="footer__sources">

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <ul>
                    <li>&#169; React</li>
                    <li>Правовая информация</li>
                    <li>Политика конфиденциальности</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer