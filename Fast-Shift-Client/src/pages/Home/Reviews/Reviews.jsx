import React, { useEffect } from 'react';
import icon from '../../../assets/customer-top.png'
import ReviewCards from './ReviewCards'

const reviewPromise = fetch('/reviews.json').then(res => res.json());

const Reviews = () => {
    return (
        <div className='my-20'>
            <div className='flex flex-col gap-4 items-center'>
                <img src={icon} alt="" />
                <h3 className='font-bold text-3xl text-center text-(--color-title)'>What our customers are sayings</h3>
                <p className='text-center max-w-2xl text-(--color-secondary)'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <div>
                <ReviewCards reviewPromise={reviewPromise}></ReviewCards>
            </div>
        </div>
    );
};

export default Reviews;