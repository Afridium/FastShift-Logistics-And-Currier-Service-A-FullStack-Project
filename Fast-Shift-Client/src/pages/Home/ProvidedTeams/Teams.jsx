import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import startPeople from '../../../assets/brands/start_people.png'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// const Teams = () => {
//     return (
//         <div className='my-19'>
//             <h3 className='text-center font-bold text-3xl text-(--color-title)'>We've helped thousands of sales teams</h3>
//             <div className='flex flex-wrap justify-center items-center w-[90%] mx-auto lg:gap-12 gap-5.5 my-10'>
//                 <img src={casio} alt="" />
//                 <img src={amazon} alt="" />
//                 <img src={moonstar} alt="" />
//                 <img src={star} alt="" />
//                 <img src={startPeople} alt="" />
//                 <img src={randstad} alt="" />

//             </div>
//         </div>
//     );
// };

const Teams = () => {
    const brandLogos = [casio, amazon, moonstar, star, startPeople, randstad];
    return (
        <div className='my-19'>
            <h3 className='text-center font-bold text-3xl text-(--color-title) mb-14'>We've helped thousands of sales teams</h3>
            <div className='max-w-[70%] mx-auto'>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={4}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    className="mySwiper"
                >
                    {
                        brandLogos.map((logo, index) => <SwiperSlide key={index}><img src={logo} className='h-5 w-auto' alt="" /></SwiperSlide>)
                    }
                </Swiper>
            </div>

        </div>
    );
}

export default Teams;