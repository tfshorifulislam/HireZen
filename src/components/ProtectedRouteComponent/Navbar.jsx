import Link from 'next/link';
import React from 'react';
import AvatarComponent from '../PublicComponents/Avatar';
import { Hamburger } from 'lucide-react';

const Navbar = () => {
    return (
        <div>
            <AvatarComponent/>
            <Link href='/'
            className='flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-center sm:text-left justify-center sm:justify-start'>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-[#004f6e] tracking-tight'>
                    Hire<span className='text-[#ff5429]'>Zen</span>
                </h1>
                <p className='text-xs sm:text-sm text-gray-500 font-medium tracking-wider whitespace-nowrap'>
                    FIND YOUR DREAM JOB
                </p>
            </Link>
            <Hamburger/>
        </div>
    );
};

export default Navbar;