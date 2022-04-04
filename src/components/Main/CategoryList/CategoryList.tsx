import React from 'react';
import CategoryItem from "../CategoryItem/CategoryItem";

const Default = [
    {text: 'A', color: '#4949ec', border:'green'},
    {text: 'B', color: 'orange', border:'orange'},
    {text: 'C', border:'#4949ec'},
    {text: 'D'},
    {text: 'E', border:'red'},
]

const CategoryList: React.VFC = () => {
    return (
        <div className="main__category-list">
            {
                Default.map((elem, index) => <CategoryItem key={index} text={elem.text} color={elem.color} border={elem.border}/>)
            }
        </div>
    );
};

export default CategoryList;
