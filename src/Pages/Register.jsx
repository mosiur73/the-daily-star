import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';



const Register = () => {
 const {createUser}=useContext(AuthContext)
 const [errorMessage, setErrorMessage] = useState('')
 
    const handleRegister=e=>{
      e.preventDefault()
      const name=e.target.name.value;
      const email=e.target.email.value;
        const password=e.target.password.value;
        setErrorMessage('')
      if (password.length < 6) {
        setErrorMessage('password should be 6 character')
      }
      const passregex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/
      if (!passregex.test(password)) {
        setErrorMessage('one upercase one number one character')
      }
      

        createUser(email,password)
        .then(result =>{
          console.log(result)
      })
      .catch(error=>{
          console.log(error.message)
      })

     
      
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          
          <div className="card bg-base-100 rounded-none max-w-3xl shrink-0 shadow-2xl">
                  <h2 className='text-2xl text-center p-6'>Register your account </h2>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            {
        errorMessage && <p className='text-red-600'>{errorMessage}</p>
      }
            <p>already have a acount.Please?<Link to="/auth/login">Login</Link></p>
          </div>
        </div>
      </div>

    );
};

export default Register;