import React from 'react';
import SocialLogin from '../component/SocialLogin';
import FindUs from '../component/FindUs';
import RightImage from '../component/RightImage';

const RightSide = () => {
    return (
        <div className='space-y-6'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <RightImage></RightImage>
           
        </div>
    );
};

export default RightSide;