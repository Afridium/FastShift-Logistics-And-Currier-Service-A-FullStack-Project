import React from 'react';
import icon from '../../../assets/bookingIcon.png'
const Howitworks = () => {
    return (
        <div className='my-12'>
            <h3 className='text-3xl font-bold text-(--color-title) ms-18 mb-7'>How It Works</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 md:w-[70%] lg:grid-cols-4 lg:w-[90%] mx-auto gap-5 my-3.5'>
            <div className='bg-white shadow p-10 lg:p-8 lg:w-3xs rounded-2xl w-2xs mx-auto'>
                <img src={icon} alt="" />
                <h3 className='font-bold my-4.5 text-(--color-title)'>Booking Pick & Drop</h3>
                <p className='text-(--color-secondary) text-[12px]'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='bg-white shadow p-10 lg:p-8 lg:w-3xs rounded-2xl w-2xs mx-auto'>
                <img src={icon} alt="" />
                <h3 className='font-bold my-4.5 text-(--color-title)'>Cash On Delivery</h3>
                <p className='text-(--color-secondary) text-[12px]'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='bg-white shadow p-10 lg:p-8 lg:w-3xs rounded-2xl w-2xs mx-auto'>
                <img src={icon} alt="" />
                <h3 className='font-bold my-4.5 text-(--color-title)'>Delivery Hub</h3>
                <p className='text-(--color-secondary) text-[12px]'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='bg-white shadow p-10 lg:p-8 lg:w-3xs rounded-2xl w-2xs mx-auto'>
                <img src={icon} alt="" />
                <h3 className='font-bold my-4.5 text-(--color-title)'>Booking SME & Corporate</h3>
                <p className='text-(--color-secondary) text-[12px]'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
        </div>
        </div>
        
    );
};

export default Howitworks;