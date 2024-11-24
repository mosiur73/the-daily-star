import React from 'react';
import Header from '../component/Header';
import RightSide from '../layout-component/RightSide';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const data=useLoaderData()
    const news=data.data[0];
    console.log(news)
   
    
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-4'>
               <section className='col-span-9'>
                     <h2 className='mb-24'>Dragon News</h2>
                     <div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={news?.
        image_url
        }
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{news?.title}</h2>
    <p>{news?.details}</p>
    <div className="card-actions">
      <Link className='btn btn-primary' to={`/categori/${news?.category_id}`}>Back to category</Link>
    </div>
  </div>
</div>
               </section>
               <section className='col-span-3'>
                <RightSide></RightSide>
               </section>
            </main>
        </div>
    );
};

export default NewsDetails;