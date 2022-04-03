import React from 'react'
import {SVG} from "../../utils/svg";

const Input: React.VFC = () => {

    return(
        <input
            className="input"
            type="text"
            placeholder="Выберите адрес доставки"
            style={{
                background: `url(${SVG.interface.vector}) no-repeat 10px`,
            }}
        />
    )
}

export default Input