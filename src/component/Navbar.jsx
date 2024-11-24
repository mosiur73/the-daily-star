import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import users from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const {user,signOutUser}=useContext(AuthContext)

  const handleSignOut=()=>{
    signOutUser()
    .then(()=>{
      console.log('sign out successfully ');
      
    })
    .catch(()=>console.log(error.message))
  }
    return (
        <div className='flex justify-between items-center'>
            <div><a className="btn">{user?.email}</a></div>
            <div className='flex gap-4 text-2xl'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
                <Link to="/auth/register">Register</Link>
            </div>
            <div className='flex gap-3 items-center'>
              <div>
                <img className='w-[45px]' src={users} alt="" />
              </div>
              {
                user ?
                <button onClick={handleSignOut} className='btn btn-neutral rounded-none'>Logout</button> :
              <Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
              }
            </div>
            
        </div>
    );
};

export default Navbar;