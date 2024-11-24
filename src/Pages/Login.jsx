import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const {singInuser}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
  const haneleSignIn=e=>{
    e.preventDefault()
    const email=e.target.email.value;
      const password=e.target.password.value;
      console.log(email,password);
      singInuser(email,password)
        .then(result =>{
          console.log(result.user)
          navigate(location?.state ? location.state : "/")
        })
        .catch(error =>{
          console.log(error)
        })
      
  }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    
    <div className="card bg-base-100 rounded-none max-w-3xl shrink-0 shadow-2xl">
            <h2 className='text-2xl text-center p-6'>Login your account </h2>
      <form onSubmit={haneleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>don't have a acount.Please?<Link to="/auth/register">Register</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;