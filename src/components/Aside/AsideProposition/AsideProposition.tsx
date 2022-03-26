// Functional
import React from "react";
// Svg constants
import {SVG} from "../../../utils/svg";

const AsideProposition: React.FC = () => {
    return(
        <div className="aside__proposition">
            <div className="aside__proposition__left">
                <img src={SVG.proposition.sales} alt="aside-proposition-sales"/>
            </div>
            <div className="aside__proposition__right">
                <p>Получай товары БЕСПЛАТНО!</p>
                <button type="button" onClick={() => alert("Узнал больше?")}>Узнать подробнее</button>
            </div>
        </div>
    )
}

export default AsideProposition