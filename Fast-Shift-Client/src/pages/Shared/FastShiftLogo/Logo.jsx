import React from 'react';
import logo from "../../../assets/logo.png";
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link to={'/'}>
            <div className="flex items-center gap-2" >
                <img
                    src={logo}
                    alt="logo"
                    className="w-7 h-8"
                />
                <span className="text-xl font-bold -ms-4 mt-2.5">
                    <span className="text-lime-500">Fast</span>Shift
                </span>
            </div >

        </Link>

    );
};

export default Logo;