import React from 'react';
import Header from '../component/Header';
import LatestNews from '../component/LatestNews';
import Navbar from '../component/Navbar';
import LeftSide from '../layout-component/LeftSide';
import RightSide from '../layout-component/RightSide';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header className='mb-8'>
                <Header></Header>
                <section className='w-10/12 mx-auto'>
                 <LatestNews></LatestNews>
                </section>
            </header>

            <nav className='w-10/12 mx-auto'>
                <Navbar></Navbar>
            </nav>
           

           <main className='w-11/12 mx-auto pt-4 grid md:grid-cols-12 gap-3'>
            <aside className='col-span-3'> 
                <LeftSide></LeftSide>
            </aside>
            <section className='col-span-6'>
                <Outlet></Outlet>
            </section>
            <aside className='col-span-3'>
                <RightSide></RightSide>
            </aside>
           </main>
        </div>
    );
};

export default HomeLayout;