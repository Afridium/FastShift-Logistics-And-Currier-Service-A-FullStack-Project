import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";
const ForgotPass = () => {
    return (
        <div className="hero min-h-screen lg:w-[80%] lg:mx-auto">
            <div className="hero-content w-full flex-col justify-center items-center">
                <div className='w-[70%] mx-auto'>
                   <h3 className='text-4xl text-(--color-title) font-extrabold mb-2.5'>Forgot Password</h3>
                   <p>Enter your Email address and we will send you a  reset link</p>
                </div>
                <div className="card bg-base-100 w-full shrink-0">
                    <div className="card-body w-[70%] mx-auto p-0">
                        <form className="fieldset">
                            <label className="label text-(--color-title) text-bold">Email</label>
                            <input type="email" className="input w-full" placeholder="Email" />
                            <button className="btn btn-neutral mt-4 bg-(--color-primary) border-0 text-black shadow-none">Send</button>
                        </form>
                        <p className='text-(--color-secondary)'>Remembered Your Password? <Link to={'/login'} className='text-(--color-primary)'>Login</Link></p>
                        <p className='text-center'>Or</p>
                    </div>
                </div>
                <Link to={'/'} className='flex items-center gap-2'><FaArrowLeft />Back To Home</Link>
            </div>
        </div>
    );
};

export default ForgotPass;