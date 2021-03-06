// Functional
import React from "react";
// Svg constants
import {SVG} from "../../../utils/svg";
import Button from "../../Button/Button";

const AsideProposition: React.FC = () => {
    return(
        <div className="aside__proposition">
            <div className="aside__proposition__left">
                <img src={SVG.proposition.sales} alt="aside-proposition-sales"/>
            </div>
            <div className="aside__proposition__right">
                <p>Получай товары БЕСПЛАТНО!</p>
                <Button
                    onClick={() => alert('!')}
                >
                    Узнать подробнее
                </Button>
            </div>
        </div>
    )
}

export default AsideProposition