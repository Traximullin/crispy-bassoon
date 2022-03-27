// Functional
import React from "react";
// Svg constants
import {SVG} from "../../../utils/svg";

interface CounterButtonProps {
    count: number
}

const CounterButton:React.VFC<CounterButtonProps> = ({count}) => {

    return(
        <div className="counter__button">
            <img
                src={SVG.arithmeticSigns.minus}
                alt="minus-count"
            />
            <p>{count}</p>
            <img
                src={SVG.arithmeticSigns.plus}
                alt="plus-count"
            />
        </div>
    )
}

export default CounterButton