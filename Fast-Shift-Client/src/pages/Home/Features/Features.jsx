import liveTracking from '../../../assets/live-tracking.png'
import safeDelivery from '../../../assets/safe-delivery.png'
const Features = () => {
  return (
    <section className="border-t border-b border-dashed border-(--color-secondary) py-10 lg:py-20 my-25">
      <div className="flex flex-col gap-6">
        {/* Card 1 */}
        <div className="bg-gray-50 rounded-2xl p-8 flex items-center gap-10">
          {/* Placeholder - replace src with your illustration image */}
          <img
            src={liveTracking}
            alt="Live Parcel Tracking illustration"
            className="w-30 lg:w-40 h-auto shrink-0"
          />
          <div className="border-l border-dashed border-(--color-secondary) pl-4 lg:h-30 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-[#0b2e2e] mb-2">Live Parcel Tracking</h3>
            <p className="md:text-sm text-[12px] lg:text-sm text-gray-500 leading-relaxed">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and
              get instant status updates for complete peace of mind.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 rounded-2xl p-8 flex items-center gap-10">
          {/* Placeholder - replace src with your illustration image */}
          <img
            src={safeDelivery}
            alt="100% Safe Delivery illustration"
            className="w-30 lg:w-40 h-auto shrink-0"
          />
          <div className="border-l border-dashed border-(--color-secondary) pl-4 lg:h-30 flex flex-col justify-center"> 
            <h3 className="text-lg font-bold text-[#0b2e2e] mb-2">100% Safe Delivery</h3>
            <p className="md:text-sm text-[12px] text-gray-500 leading-relaxed">
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination. Our reliable process
              guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 rounded-2xl p-8 flex items-center gap-10">
          {/* Placeholder - replace src with your illustration image */}
          <img
            src={safeDelivery}
            alt="24/7 Call Center Support illustration"
            className="w-30 lg:w-40 h-auto shrink-0"
          />
          <div className="border-l border-dashed lg:h-30 flex flex-col justify-center border-(--color-secondary) pl-4">
            <h3 className="text-lg font-bold text-[#0b2e2e] mb-2">24/7 Call Center Support</h3>
            <p className="md:text-sm text-[12px] text-gray-500 leading-relaxed">
              Our dedicated support team is available around the clock to
              assist you with any questions, updates, or delivery concerns —
              anytime you need us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;