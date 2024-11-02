
import React from 'react';
import Image from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200  min-h-screen container mx-auto max-w-7xl  mt-8 rounded-xl">
            <div className='rounded-xl'>
                <img className='rounded-2xl' src={Image} alt="" />
            </div>
        </div>
    );
};

export default Banner;