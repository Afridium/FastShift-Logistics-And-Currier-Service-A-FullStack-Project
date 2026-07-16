import React from 'react';

const AboutUs = () => {
    return (
        <div className='bg-white my-11 rounded-3xl p-5 lg:p-10 lg:px-20'>
            <div className='mb-6 border-b border-gray-300 pb-9'>
                <h3 className='text-3xl lg:text-4xl font-extrabold text-(--color-title) mb-4'>About Us</h3>
                <p className='text-(--color-secondary) lg:w-[50%]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs">
                <input type="radio" name="my_tabs_1" placeholder='Mission' className="tab text-xl checked:font-bold" aria-label="Story" defaultChecked />
                <div class="tab-content p-6">
                    <p className='text-(--color-secondary)'>
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                        </p>
                </div>
                <input type="radio" name="my_tabs_1" className="tab text-xl checked:font-bold" aria-label="Mission" />
                <div className='tab-content p-6'>
                    <p className='text-(--color-secondary)'>Our mission is to simplify parcel delivery through reliable service, advanced tracking, and customer-focused solutions. We strive to connect people and businesses by ensuring every shipment is handled with care, speed, and transparency from pickup to delivery.</p>
                </div>
                <input type="radio" name="my_tabs_1" className="tab text-xl checked:font-bold" aria-label="Success" />
                <div className='tab-content p-6'>
                    <p className='text-(--color-secondary)'>Our success is built on trust, consistency, and customer satisfaction. By delivering thousands of parcels safely and on time, we continue to grow through innovation, dependable logistics, and a commitment to exceeding expectations with every shipment.</p>
                </div>
                <input type="radio" name="my_tabs_1" className="tab text-xl checked:font-bold" aria-label="Teams and Others" />
                <div className='tab-content p-6'>
                    <p className='text-(--color-secondary)'>Our dedicated team works together to make every delivery seamless. From customer support and warehouse staff to delivery professionals and logistics experts, each member plays a vital role in providing fast, secure, and reliable parcel services every day.</p>
                    <p className='text-(--color-secondary)'>Beyond parcel delivery, we are committed to continuous improvement and innovation. We embrace new technologies, value customer feedback, and build lasting partnerships to create a smarter, more efficient delivery experience for individuals and businesses alike.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;