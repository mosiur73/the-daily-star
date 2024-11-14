import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-6 bg-base-200 p-3'>
            <p className='bg-[#D72050] p-2'>Latest</p>
            <Marquee pauseOnHover className='space-x-12'>
                <Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, magni?</Link>
                <Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, magni?</Link>
                <Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, magni?</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;