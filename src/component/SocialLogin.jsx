import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='text-2xl mb-4'>Login with</h1>
            <div className='*:w-full space-y-3'>
                <button className='btn'><FaGoogle /> Login with google</button>
                <button className='btn'><FaGithub /> Login with github</button>
            </div>
        </div>
    );
};

export default SocialLogin;