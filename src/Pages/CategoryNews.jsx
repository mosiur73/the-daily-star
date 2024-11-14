import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from './NewsCart';

const CategoryNews = () => {
    const {data} =useLoaderData()
    console.log(data);
    
    return (
        <div>
            <h2 className='text-xl font-semibold'>Dragon News Home</h2>
           <div className='gap-6'>
           {
                data.map(singleData =><NewsCart key={singleData._id} news={singleData}></NewsCart>)
            }
           </div>
        </div>
    );
};

export default CategoryNews;