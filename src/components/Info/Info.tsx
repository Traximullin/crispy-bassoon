import React from 'react';

interface InfoProps {
    children?: React.ReactNode
    gap?: string
    title?: string
    theme?: string
    style?: React.CSSProperties
}

const themes: {[key: string]: string} = {
    "row": "info_theme_row",
}

const Info: React.FC<InfoProps> = ({style, gap, title, theme, children}) => {

    const rootClasses = ['info']
    theme && theme.split(' ').forEach(elem => rootClasses.push(themes[elem]))

    return (
        <div className={rootClasses.join(' ')} >
            <div className='info__container' style={{...style, gap: gap}}>
                {title && <p className='info__title'>{title}</p>}
                <div className='info__content'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Info;
