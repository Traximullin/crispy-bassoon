import React, {InputHTMLAttributes} from 'react'
import {SVG} from "../../utils/svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder?: string
    type?: React.HTMLInputTypeAttribute,
}

const Input: React.VFC<InputProps> = ({
    placeholder,
    type,
    ...props
  }) => {

    return(
        <input
            className="input"
            type={type}
            placeholder={placeholder}
            style={{
                background: `url(${SVG.interface.vector}) no-repeat 10px`,
            }}
            {...props}
        />
    )
}

Input.defaultProps = {
    type: "text"
}

export default Input