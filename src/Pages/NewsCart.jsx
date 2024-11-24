import React from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { FaEye, FaRegBookmark } from 'react-icons/fa';
import { FcRating } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const NewsCart = ({news}) => {
   
    const {_id,title,details,image_url,author,rating,total_view}=news;
    
    return (
        <div>
            <div className="card bg-base-100  shadow-xl p-4 space-y-4 mb-6">
            <h2 className="card-title">{title} </h2>
  <figure>
    <img
      src={image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p>{details.slice(0,150)}...{""}</p>
    <Link to={`/news/${news._id}`} className='text-red-400'>Read more</Link>

    <div className="divider"></div>
   <div className='flex justify-between items-center'>
   <div className='flex items-center gap-3'>
                    <FcRating></FcRating>
                    {rating ?.number}
                </div>
                <div className='flex items-center gap-3'>
                <FaEye /> {total_view}
                </div>
   </div>
  </div>
</div>
            
        </div>
    );
};

export default NewsCart;