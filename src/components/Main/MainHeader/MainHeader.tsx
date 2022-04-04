import React from 'react';

interface Props {
    title?: string,
    button?: Button[]
    children?: React.ReactNode
}

interface Button {
    title?: string,
    settings?: ButtonSettings,
    onClick?: React.ReactEventHandler
}

interface ButtonSettings {
    color?: string
}

const MainHeader = ({title, button, children}: Props) => {
    return (
        <div className="main__header">
            <div className="main__header__top">
                {title && <h3>{title}</h3>}
                {
                    button && button.map((elem, index) => (
                        <span key={index} onClick={elem.onClick} style={{...elem.settings}}>
                            {elem.title}
                        </span>
                    ))
                }
            </div>
            {
                children &&
                <div className="main__header__bottom">
                    {children}
                </div>
            }
        </div>
    );
};

export default MainHeader;
