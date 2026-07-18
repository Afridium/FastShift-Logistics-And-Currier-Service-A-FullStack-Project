import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import useAuth from '../../CustomHooks/useAuth';
const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {loginUsingEmailAndPassword, signInWithGoogle} = useAuth();
    const handleLogin = (data) => {
        console.log(data);
        loginUsingEmailAndPassword(data.email, data.password)
        .then(result => console.log(result.user))
        .catch(err => console.log(err));
    }

    const handleLoginWithGoogle = () => {
        signInWithGoogle()
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }
    return (
        <div className="hero min-h-screen lg:w-[80%] lg:mx-auto">
            <div className="hero-content w-full flex-col justify-center items-center">
                <div className='w-[70%] mx-auto'>
                   <h3 className='text-4xl text-(--color-title) font-extrabold mb-2.5'>Welcome Back</h3>
                   <p>Login with FastShip</p>
                </div>
                <div className="card bg-base-100 w-full shrink-0">
                    <div className="card-body w-[70%] mx-auto p-0">
                        <form onSubmit={handleSubmit(handleLogin)} className="fieldset">

                            <label className="label text-(--color-title) text-bold">Email</label>
                            <input type="email" {...register('email', {required: true})} className="input w-full" placeholder="Email" />
                            {errors.email?.type==='required' && <p className='text-red-700'>Email is Required</p>}
                            
                            <label className="label text-(--color-title) strong">Password</label>
                            <input type="password" {...register('password', {required:true, minLength:8})} className="input w-full" placeholder="Password" />
                            {errors.password?.type==='required' && <p className='text-red-700'>Password is Required</p>}
                            {errors.password?.type==='minLength' && <p className='text-red-700'>Password must be 8 characters long</p>}
                            <div><Link to={'/forgotPass'} className="link link-hover underline text-(--color-secondary)">Forgot password?</Link></div>
                            <input  className="btn btn-neutral mt-4 bg-(--color-primary) border-0 text-black shadow-none" type="submit" value="Login" />
                        
                        </form>
                        <p className='text-(--color-secondary)'>Dont Have an Account? <Link to={'/register'} className='text-(--color-primary)'>Register</Link></p>
                        <p className='text-center'>Or</p>
                        <button onClick={handleLoginWithGoogle} className="btn bg-white text-black">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </div>
                <Link to={'/'} className='flex items-center gap-2'><FaArrowLeft />Back To Home</Link>
            </div>
        </div>
    );
};

export default Login;