import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSide = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res =>res.json())
        .then(data =>setCategories(data.data.news_category ))
    } ,[])
    return (
        <div className=''>
            <h1>All Category({categories.length})</h1>
            <div className='flex gap-5 flex-col'>
                {
                   categories.map((categori) =>(<NavLink to={`/categori/${categori.category_id}`} className='btn ' key={categori.category_id}>{categori.category_name}</NavLink>))
                }
            </div>
        </div>
    );
};

export default LeftSide;