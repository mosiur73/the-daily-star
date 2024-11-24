import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';

const AuthLayout = () => {
    return (
        <div className='font-poppins w-10/12 mx-auto'>
           <section className='m-10'>
           <Navbar></Navbar>
           </section>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;