import { useState } from "react";
import { NavLink } from "react-router";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import '../../../App.css'
import Logo from "../FastShiftLogo/Logo";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const LinksDesktop = <>
        <li>
            <NavLink to="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                Home
            </NavLink>
        </li>

        <li>
            <NavLink to="/services" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                Services
            </NavLink>
        </li>
        <li>
            <NavLink to={"/coverage"} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                Coverage
            </NavLink>
        </li>
        <li>
            <NavLink to={"/about"} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                About Us
            </NavLink>
        </li>
        <li>
            <NavLink to="/pricing" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                Pricing
            </NavLink>
        </li>
        <li>
            <NavLink to="/blog" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                Blog
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                Contact
            </NavLink>
        </li>

    </>

    const LinksMobile = <>
        <li>
            <NavLink
                to="/services"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
                Services
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/coverage"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
                Coverage
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
                About Us
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/pricing"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
                Pricing
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/blog"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
                Blog
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
                Contact
            </NavLink>
        </li>
    </>

    return (
        <nav className="bg-white rounded-2xl px-4 sm:px-6 py-4 mx-auto shadow-sm">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="pl-3.5">
                    <Logo></Logo>
                </div>

                {/* Desktop Nav Links */}
                <ul className="hidden lg:flex items-center gap-6">
                    {LinksDesktop}
                </ul>
                <div className="hidden lg:flex items-center gap-3">
                    <NavLink to="/login" className="btn btn-outline btn-sm rounded-full px-5">
                        Sign In
                    </NavLink>
                    <NavLink
                        to="/register"
                        className="btn btn-sm bg-(--color-primary) hover:bg-lime-500 border-none text-black rounded-full px-5"
                    >
                        Sign Up
                    </NavLink>
                    <button
                        aria-label="Get started"
                        className="btn btn-circle btn-sm bg-black hover:bg-gray-800 border-none text-white -ml-2.5"
                    >
                        <FiArrowUpRight className="text-base text-amber-300" />
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="btn btn-ghost btn-circle lg:hidden"
                >
                    {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden mt-4 pt-4 border-t border-gray-100">
                    <ul className="flex flex-col gap-4">
                        {LinksMobile}
                    </ul>
                    <div className="flex items-center gap-3 pt-4">
                        <NavLink to="/signin" className="btn btn-outline btn-sm rounded-full flex-1">
                            Sign In
                        </NavLink>
                        <NavLink
                            to="/signup"
                            className="btn btn-sm bg-lime-400 hover:bg-lime-500 border-none text-black rounded-full flex-1"
                        >
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;