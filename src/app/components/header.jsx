'use client';

import Link from 'next/link';
import React from 'react'
import { FcLike } from "react-icons/fc";
import { ImUsers } from "react-icons/im";

import { useSelector } from 'react-redux';

const Header = () => {


    const updatedLikes = useSelector((state) => state.counter.value);
    const userCount = useSelector((state) => state.newsubscriber.user);
    const updatedComments = useSelector((state) => state.newComments.comments);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/' },
        { name: 'Contact', path: '/' },
        { name: 'About', path: '/' },
    ];

    const ref = React.useRef(null)

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(ref.current.scrollTop > 10);
        };
        ref.current.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={ref} className="h-34 md:h-34 overflow-y-scroll">
            <nav className={`fixed top-0 left-0 bg-indigo-500 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className='text-white font-bold'>NextReduxToolkit</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </Link>
                    ))}
                </div>

                {/* Desktop Right */}
                <div className="flex flex-row md:flex items-center gap-2 lg:gap-8">
                    <p className='text-gray-50 flex items-center justify-center gap-1'><ImUsers /><span className='pl-1'>{userCount.length}</span></p> 
                    <p className='text-gray-50 flex items-center justify-center gap-1'>                
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.798 1H4.12c-1.092 0-1.638 0-2.055.212a1.95 1.95 0 0 0-.852.852C1 2.481 1 3.027 1 4.12v11.308c0 1.091 0 1.637.212 2.054.187.367.486.665.852.852.417.213.963.213 2.055.213h1.755M8.798 1l5.849 5.849M8.798 1v4.289c0 .546 0 .819.106 1.027a1 1 0 0 0 .426.426c.209.107.482.107 1.028.107h4.289m0 0v.974M9.773 18.546l1.974-.395c.172-.034.258-.052.338-.083a1 1 0 0 0 .202-.108c.07-.05.133-.111.257-.236l4.052-4.052a1.378 1.378 0 1 0-1.95-1.95l-4.052 4.053c-.124.124-.186.186-.235.257a1 1 0 0 0-.108.201c-.032.08-.049.167-.083.339z" stroke="#FACC14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{updatedComments.length}</span>
                    </p> 
                    <p className='text-gray-50 flex items-center justify-center gap-1'><FcLike /><span>{updatedLikes}</span></p> 
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header