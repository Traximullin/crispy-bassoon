import React from "react";
// fixme
type buttonTypeProps = "button" | "submit" | "reset"

interface Props {
    onClick: React.ReactEventHandler
    type?: buttonTypeProps
}

const defaultProps = {
    type: "button" as "button"
}

const Button: React.FC<Props> = ({
         onClick,
         type,
         children
    }) => {

    return(
        <button
            className="button"
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

Button.defaultProps = defaultProps

export default Button