import React from 'react';
import zapshiftLogo from "../../../assets/logo.png";
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link to={'/'}>
            <div className="flex items-center gap-2 relative" >
                <img
                    src={zapshiftLogo}
                    alt="ZapShift logo"
                    className="w-7 h-8 absolute right-17 bottom-1"
                />
                <span className="text-xl font-bold">
                    <span className="text-lime-500">Fast</span>Shift
                </span>
            </div >

        </Link>

    );
};

export default Logo;