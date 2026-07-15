import { Quote } from "lucide-react";
import { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ReviewCards = ({ reviewPromise }) => {
    let userReviews = use(reviewPromise);
    return (
        <div className="mt-11">
            <Swiper
                observer={true}
                observeParents={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    scale: 0.8,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper reviews-swiper"
                slidesPerView={1}
                spaceBetween={16}
                breakpoints={{
                    640: { slidesPerView: 1.5, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 24 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
            >
                {
                    userReviews.map(reviews => <SwiperSlide key={reviews.id}>
                        <div className="w-[320px] h-auto max-w-md mx-auto px-4 sm:px-0">
                            <div className="bg-base-100 rounded-2xl shadow-sm border border-base-200 p-6 sm:p-8">
                                {/* Quote icon */}
                                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-200 fill-cyan-200" strokeWidth={0} />

                                {/* Quote text */}
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-4">
                                    {reviews.review}
                                </p>

                                {/* Dashed divider */}
                                <div className="border-t border-dashed border-gray-300 my-6" />

                                {/* Profile */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                    {/* Image placeholder — swap the src below with the real photo */}
                                    <img
                                        src={reviews.user_photoURL}
                                        alt="userDisplayPictures"
                                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shrink-0"
                                    />

                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                                            {reviews.userName}
                                        </h4>
                                        <p className="text-gray-500 text-xs sm:text-sm">
                                            {reviews.ratings} / 5
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                }
            </Swiper>

        </div>


    );
};

export default ReviewCards;