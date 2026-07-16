import React from 'react';
import Logo from '../pages/Shared/FastShiftLogo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div className='mx-auto bg-[#FAFDF0] relative'>
            <div className='ms-25 mt-4  w-fit absolute translate-x-1/2 translate-y-5'>
                    <Logo></Logo> 
            </div>
            
            <div className='flex items-center justify-center'>
                <div className='flex-1 bg-white'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1 bg-[#FAFDF0] hidden md:flex items-center justify-center'>
                    <img src={authImage} alt="Authentication Image" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;