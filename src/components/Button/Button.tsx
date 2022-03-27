import React from "react";

type buttonTypeProps = "button" | "submit" | "reset"

interface Props {
    title: string
    onClick: React.ReactEventHandler
    type?: buttonTypeProps
}

const defaultProps = {
    type: "button" as "button"
}

const Button: React.VFC<Props> = ({title,onClick,type}) => {

    return(
        <button
            className="button"
            onClick={onClick}
            type={type}
        >
            {title}
        </button>
    )
}

Button.defaultProps = defaultProps

export default Button