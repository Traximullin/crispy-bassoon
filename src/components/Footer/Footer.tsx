// Functional
import React from 'react'
import {SVG} from "../../utils/svg";

const Footer: React.FC = () => {

    return(
        <footer className="footer">
            <div className="footer__header">
                <h1>React</h1>
                <div className="footer__contacts">
                    <div className="footer__contacts_item">
                        <p>Присоединяйтесь к нам</p>
                        <div className="footer__sources">
                            <img src={SVG.sources.facebook} alt="source-facebook" />
                            <img src={SVG.sources.vk} alt="source-vk" />
                            <img src={SVG.sources.inst} alt="source-inst" />
                        </div>
                    </div>
                    <div className="footer__contacts_item">
                        <p>Устанавливайте приложение</p>
                        <div className="footer__sources">
                            <img src={SVG.sources.googlePlay} alt="source-app-google-play" />
                            <img src={SVG.sources.appStore} alt="source-app-store"/>
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