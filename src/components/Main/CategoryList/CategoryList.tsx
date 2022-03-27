import React from 'react';
import CategoryItem from "../Category/CategoryItem";

const Default = [
    {text: 'A', color: '#4949ec', border:'green'},
    {text: 'B', color: 'orange', border:'orange'},
    {text: 'C', border:'#4949ec'},
    {text: 'D'},
    {text: 'E', border:'red'},
]

const CategoryList: React.FC = () => {
    return (
        <div>
            {
                Default.map(elem => <CategoryItem text={elem.text} color={elem.color} border={elem.border}/>)
            }
        </div>
    );
};

export default CategoryList;
