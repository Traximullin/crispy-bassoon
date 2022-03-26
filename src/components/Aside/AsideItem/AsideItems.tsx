import React from 'react'
import {IMAGES} from "../../../utils/images";

interface Props {
    background?: string
    title?: string
}

const defaultProps = {
    background: IMAGES.newCollection,
    title: "Новая коллекция"
}

const AsideItems: React.FC<Props> = ({background, title}) => {
    return(
        <div className="aside__item" style={{
            background: `url("${background}") no-repeat scroll center center / cover`
        }}>
            <h3>{title}</h3>
        </div>
    )
}

AsideItems.defaultProps = defaultProps

export default AsideItems