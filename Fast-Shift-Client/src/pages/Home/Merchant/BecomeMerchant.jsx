import React from 'react';
import locationMerchant from '../../../assets/location-merchant.png'
import beAMerchant from '../../../assets/be-a-merchant-bg.png'
const BecomeMerchant = () => {
    return (
        <div className="bg-(--color-title) text-white rounded-2xl p-7 lg:p-20 flex flex-col lg:flex-row gap-10 overflow-hidden relative md:py-20 my-16">
            {/* Text content */}
            <div className="md:w-[60%] lg:max-w-[45%] z-30">
                <h3 className="font-extrabold text-2xl sm:text-3xl mb-5 lg:mb-7">
                    Merchant and Customer Satisfaction is Our First Priority
                </h3>
                <p className="text-[12px] md:text-sm mb-5 lg:mb-7">
                    We offer the lowest delivery charge with the highest value along
                    with 100% safety of your product. Pathao courier delivers your
                    parcels in every corner of Bangladesh right on time.
                </p>
                <div className="flex flex-wrap gap-3">
                    <button className="btn bg-(--color-primary) font-bold shadow-2xl rounded-3xl border-0">
                        Become a Merchant
                    </button>
                    <button className="btn bg-transparent rounded-3xl shadow-2xl border-(--color-primary) text-(--color-primary)">
                        Earn with ZapShift Courier
                    </button>
                </div>
            </div>

            {/* Image placeholder - replace src with your illustration image */}
            <img
                src={locationMerchant}
                alt="Parcel delivery illustration"
                className="w-full max-w-xs right-0 bottom-5 lg:max-w-none lg:w-auto lg:flex-1 h-auto absolute md:bottom-20 md:right-10  lg:right-15 lg:bottom-10"
            />
            <img
                src={beAMerchant}
                alt="Parcel delivery illustration"
                className="w-full max-w-none lg:max-w-none lg:w-auto lg:flex-1 h-auto absolute top-0"
            />
        </div>
    );
};

export default BecomeMerchant;