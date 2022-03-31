import React from "react";

type buttonTypeProps = "button" | "submit" | "reset"

type buttonTypeThemes = "white" | "white w100"

interface Props {
    title: string
    onClick: React.ReactEventHandler
    type?: buttonTypeProps
    theme?: buttonTypeThemes
}

const defaultProps = {
    type: "button" as "button"
}

const Button: React.VFC<Props> = ({title, onClick, type, theme}) => {

    const rootClasses = ['button']
    theme && theme.split(' ').forEach(elem => rootClasses.push(`button_${elem}`))

    return(
        <button
            className={rootClasses.join(' ')}
            onClick={onClick}
            type={type}
        >
            {title}
        </button>
    )
}

Button.defaultProps = defaultProps

export default Button