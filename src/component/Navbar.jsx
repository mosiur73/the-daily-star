import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='flex gap-4 text-2xl'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className='flex gap-3 items-center'>
              <div>
                <img className='w-[45px]' src={user} alt="" />
              </div>
              <button className='btn btn-neutral rounded-none'>Login</button>
            </div>
            
        </div>
    );
};

export default Navbar;