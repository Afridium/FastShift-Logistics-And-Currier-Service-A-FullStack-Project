import React from 'react';
import FAQaccordion from './FAQaccordion';

const FAQpromise = fetch('/faq.json').then(res=>res.json());

const FAQ = () => {
    return (
        <div className='my-11 mx-auto w-[80%] lg:w-[65%]'>
            <h3 className='font-bold text-3xl text-(--color-title) text-center mb-3.5'>Frequenty Asked Questions (FAQ)</h3>
            <p className='text-(--color-secondary) text-center'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            <div className='mt-12'>
                <FAQaccordion FAQpromise={FAQpromise}></FAQaccordion>
            </div>
        </div>
    );
};

export default FAQ;