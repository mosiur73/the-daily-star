import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='mb-8'>
        <div className='flex justify-center items-center m-6 mb-6'>
        <img className='w-[400px]' src={logo} alt="" />
        </div>
        <h1 className='text-center mb-4 text-xl font-poppins'>Journalism Without Fear or Favour</h1>
        <h2 className='text-center'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>
        </div>
    );
};

export default Header;