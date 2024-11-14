import React from 'react';
import img1 from '../assets/qZone1.png'
import img2 from '../assets/qZone2.png'
import img3 from '../assets/qZone3.png'
import img4 from '../assets/bg.png'

const RightImage = () => {
    return (
        <div className=' space-y-6'>
            <h1 className='text-2xl mb-4'>Q-Zone</h1>
             <div className='bg-base-200'>
          <img className='p-3' src={img1} alt="" />
            </div>
            <div className='bg-base-200'>
          <img className='p-3' src={img2} alt="" />
            </div>
            <div className='bg-base-200'>
          <img className='p-3' src={img3} alt="" />
            </div>
            <div>
                <img className='w-full' src={img4} alt="" />
            </div>
        </div>
    );
};

export default RightImage;




