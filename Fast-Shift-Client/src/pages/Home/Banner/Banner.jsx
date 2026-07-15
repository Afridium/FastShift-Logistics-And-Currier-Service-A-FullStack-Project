import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'
import { FiArrowUpRight } from "react-icons/fi";
const Banner = () => {
    return (
        <div className='my-5 relative'>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} showArrows={false} emulateTouch={true}>
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner2} />
                </div>
                <div>
                    <img src={banner3} />
                </div>
            </Carousel>

            <div className='absolute bottom-5 md:bottom-9 left-6 md:left-16 lg:left-22 lg:bottom-14 flex flex-col justify-center items-center'>
                <div className='flex gap-3.5 items-center'>
                    <button className='btn-sm bg-(--color-primary) hover:bg-lime-500 border-none text-black rounded-full px-2.5 py-1 text-[8px] md:px-5 md:py-3.5 md:text-xs lg:text-[16px] font-bold'>Track Your Parcel</button>
                    <button
                        aria-label="Get started"
                        className="hidden md:flex md:btn lg:btn btn-circle btn-sm bg-black hover:bg-gray-800 border-none text-white -ml-2.5 lg:-ml-3.5 lg:btn-md"
                    >
                        <FiArrowUpRight className="text-base mx-auto lg:text-lg text-amber-200" />
                    </button>
                    <button className='btn-sm bg-amber-50 px-2 py-1 text-[8px] md:px-5 md:py-2.5 md:text-xs  rounded border-gray-200 font-bold lg:text-[16px] lg:btn lg:py-5 lg:rounded-xl'>Be A Rider</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;