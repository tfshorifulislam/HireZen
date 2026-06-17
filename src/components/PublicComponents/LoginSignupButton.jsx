import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const LoginSignupButton = () => {
    return (
        <div className='bg-[#004f6e] w-full px-4 py-3 md:py-2 flex flex-col gap-4 md:flex-row md:justify-between md:items-center sm:mt-3'>
            
           
            <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/90 font-medium text-center md:justify-start'>
                <p className="cursor-pointer hover:text-white transition-colors">Find Remote Jobs</p>
                <p className="cursor-pointer hover:text-white transition-colors">How HireZen Works</p>
                <p className="cursor-pointer hover:text-white transition-colors">Career Advice</p>
            </div>
            
           
            <div className='flex items-center justify-center gap-3 w-full md:w-auto'>
                <Button 
                    className='text-white hover:bg-white/10 rounded-sm flex-1 md:flex-none min-w-20' 
                    variant='light'
                >
                  <Link href={'/signin'}> Log In </Link>
                </Button>
                <Button 
                    className='text-white bg-[#ff5429] rounded-sm font-medium flex-1 md:flex-none min-w-22 shadow-sm hover:bg-[#e04822] transition-colors'
                >
                   <Link href={'/signup'}> Sign Up </Link>
                </Button>
            </div>

        </div>
    );
};

export default LoginSignupButton;