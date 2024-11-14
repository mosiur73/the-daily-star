import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaTwitter } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h1 className='text-2xl mb-3'>Find Us</h1>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item"><CiFacebook />Facebook</button>
                <button className="btn join-item"><FaTwitter />Twitter</button>
                <button className="btn join-item"><FaSquareInstagram />Instragram</button>
            </div>
        </div>
    );
};

export default FindUs;