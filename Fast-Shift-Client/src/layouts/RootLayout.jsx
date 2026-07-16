import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/NavBar/Navbar';

const RootLayout = () => {
    return (
        <div className='pt-3.5 bg-[#EAECED]'>
            <div className='max-w-7xl mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default RootLayout;