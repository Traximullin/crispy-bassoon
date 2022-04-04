import React from 'react'
import {SVG} from "../../utils/svg";

interface InputProps {
    placeholder?: string
    type?: React.HTMLInputTypeAttribute
}

const Input: React.VFC<InputProps> = ({
    placeholder,
    type
  }) => {

    return(
        <input
            className="input"
            type={type}
            placeholder={placeholder}
            style={{
                background: `url(${SVG.interface.vector}) no-repeat 10px`,
            }}
        />
    )
}

Input.defaultProps = {
    type: "text"
}

export default Input