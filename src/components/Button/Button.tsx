import React from "react";
// fixme
type buttonTypeProps = "button" | "submit" | "reset"
// ? Eugene fuck u
type buttonTypeThemes = string

interface Props {
    onClick: React.ReactEventHandler
    type?: buttonTypeProps
    theme?: buttonTypeThemes
    src?: string
    padding?: string
}

const defaultProps = {
    type: "button" as "button"
}

const themes: { [key: string]: string } = {
    "white": "button_white",
    "light": "button_light-blue",
    "w-100": "button_w100",
}

const Button: React.FC<Props> = ({onClick, type, theme, src, padding}) => {

    const rootClasses = ['button']
    theme && theme.split(' ').forEach(elem => rootClasses.push(themes[elem]))

    return(
        <button
            className={rootClasses.join(' ')}
            onClick={onClick}
            type={type}
            style={{padding: `${padding}`}}
        >
            <div className='button__items'>
                {src && <img src={src} alt="button" className='button__img'/>}
                {children}
            </div>
        </button>
    )
}

Button.defaultProps = defaultProps

export default Button