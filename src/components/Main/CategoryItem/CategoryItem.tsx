import React from "react";

interface Props {
    color?: string
    border?: string
    text: string
}

const defaultProps = {
    color: "white",
    border: "#4949ec"
}

const CategoryItem: React.FC<Props> = ({color, border, text}) => {
    return (
        <span className="main__header__category" style={{
            backgroundColor: color,
            border: `1px solid ${border}`,
            color: color === 'white' ? 'black' : 'white',
        }}>
            {text}
        </span>
    )
}

CategoryItem.defaultProps = defaultProps

export default CategoryItem;
