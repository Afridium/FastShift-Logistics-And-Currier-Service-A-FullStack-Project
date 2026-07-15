import { FaLinkedinIn, FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";
// Place your ZapShift logo file at this path (e.g. src/assets/logo.png)
// and uncomment the import below:
import zapshiftLogo from "../../../assets/logo.png";
import Logo from "../ZapShiftLogo/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-white rounded-2xl px-6 py-10 sm:px-10 md:px-12 md:py-12 mx-auto">
      {/* Logo + Tagline */}
      <div className="text-center flex flex-col justify-center items-center gap-3.5">
        <Logo></Logo>
        <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed px-2">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Divider */}
      <hr className="border-t border-dashed border-gray-700 my-8" />

      {/* Nav Links */}
      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-300">
        <a href="#" className="hover:text-white transition-colors">Services</a>
        <a href="#" className="hover:text-white transition-colors">Coverage</a>
        <a href="#" className="hover:text-white transition-colors">About Us</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
        <a href="#" className="hover:text-white transition-colors">Blog</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </nav>

      {/* Divider */}
      <hr className="border-t border-dashed border-gray-700 my-8" />

      {/* Social Icons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="#"
          aria-label="LinkedIn"
          className="w-9 h-9 rounded-full bg-[#0A66C2] flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <FaLinkedinIn className="text-white text-base" />
        </a>
        <a
          href="#"
          aria-label="X (Twitter)"
          className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <FaXTwitter className="text-black text-base" />
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <FaFacebookF className="text-white text-base" />
        </a>
        <a
          href="#"
          aria-label="YouTube"
          className="w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <FaYoutube className="text-white text-base" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;