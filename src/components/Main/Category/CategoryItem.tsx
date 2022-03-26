import React from "react";

interface Props {
    color: string
    border: string
}

const CategoryItem: React.FC<Props> = ({color, border}) => {
    return (
        <span className="main__header__category">Игрушка</span>
    )
}

export default CategoryItem;
