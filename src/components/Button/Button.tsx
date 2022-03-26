import React from "react";

interface Props {
    title: string
    onClick: React.ReactEventHandler
}

// const defaultProps = {
//     type: "button"
// }

const Button: React.FC<Props> = ({title,onClick}) => {

    return(
        <button
            onClick={onClick}
            className="button"
        >
            {title}
        </button>
    )
}

// Button.defaultProps = defaultProps

export default Button