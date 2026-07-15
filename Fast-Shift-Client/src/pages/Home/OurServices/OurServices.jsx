import { FaBoxOpen } from "react-icons/fa6";
// Placeholder for the mascot/icon image used inside each card circle.
// Replace with your actual icon import, e.g:
import parcelIcon from "../../../assets/service.png";

const Services = () => {
  return (
    <section className="bg-(--color-title) rounded-3xl px-6 py-14 md:px-2 mx-auto mb-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Services</h2>
        <p className="text-white text-sm max-w-xl mx-auto leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:w-[80%] mx-auto gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 text-center hover:bg-(--color-primary) transition-colors cursor-pointer">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            {/* Placeholder - replace src with your icon image */}
            <img src={parcelIcon} alt="Express & Standard Delivery icon" className="w-8 h-8 object-contain" />
          </div>
          <h3 className="text-lg font-bold text-(--color-title) mb-2">
            Express &amp; Standard Delivery
          </h3>
          <p className="text-sm text-(--color-secondary)  leading-relaxed">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within
            4–6 hours from pick-up to drop-off.
          </p>
        </div>

        {/* Card 2 - highlighted */}
        <div className="bg-white rounded-2xl p-6 text-center hover:bg-(--color-primary) transition-colors cursor-pointer">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/40 flex items-center justify-center">
            {/* Placeholder - replace src with your icon image */}
            <img src={parcelIcon} alt="Nationwide Delivery icon" className="w-8 h-8 object-contain" />
          </div>
          <h3 className="text-lg font-bold text-(--color-title) mb-2">Nationwide Delivery</h3>
          <p className="text-sm text-(--color-secondary)  leading-relaxed">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-6 text-center hover:bg-(--color-primary) transition-colors cursor-pointer">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            {/* Placeholder - replace src with your icon image */}
            <img src={parcelIcon} alt="Fulfillment Solution icon" className="w-8 h-8 object-contain" />
          </div>
          <h3 className="text-lg font-bold text-(--color-title) mb-2">Fulfillment Solution</h3>
          <p className="text-sm text-(--color-secondary)  leading-relaxed">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-6 text-center hover:bg-(--color-primary) transition-colors cursor-pointer">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            {/* Placeholder - replace src with your icon image */}
            <img src={parcelIcon} alt="Cash on Home Delivery icon" className="w-8 h-8 object-contain" />
          </div>
          <h3 className="text-lg font-bold text-(--color-title) mb-2">Cash on Home Delivery</h3>
          <p className="text-sm text-(--color-secondary)  leading-relaxed">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-2xl p-6 text-center hover:bg-(--color-primary) transition-colors cursor-pointer">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            {/* Placeholder - replace src with your icon image */}
            <img src={parcelIcon} alt="Cash on Home Delivery icon" className="w-8 h-8 object-contain" />
          </div>
          <h3 className="text-lg font-bold text-(--color-title) mb-2">
            Corporate Service / Contract In Logistics
          </h3>
          <p className="text-sm text-(--color-secondary)  leading-relaxed">
            Customized corporate services which includes warehouse and
            inventory management support.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-2xl p-6 text-center hover:bg-(--color-primary) transition-colors cursor-pointer">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            {/* Placeholder - replace src with your icon image */}
            <img src={parcelIcon} alt="Cash on Home Delivery icon" className="w-8 h-8 object-contain" />
          </div>
          <h3 className="text-lg font-bold text-(--color-title) mb-2">Parcel Return</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;