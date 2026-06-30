'use client'
import React from 'react';
import { SearchField } from "@heroui/react";
import Link from 'next/link';
import { useSession } from '@/lib/auth-client';
import AvatarComponent from './Avatar';
import { Menu } from 'lucide-react';
import NavbarSkeleton from './NavbarSkeleton';

const PublicNavbar = () => {
    const { data: session, isPending } = useSession()
    const user = session?.user
    // console.log(user)

    if(isPending){
        return <NavbarSkeleton/>
    }

    return (
        <nav className='w-11/12 mx-auto py-4 flex flex-col gap-4 md:flex-row md:justify-between md:items-center'>
            <div className='flex justify-between items-center w-full'>
                <Menu className='md:hidden' />

                <Link href='/'
                    className='flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-center sm:text-left justify-center sm:justify-start'>
                    <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-[#004f6e] tracking-tight'>
                        Hire<span className='text-[#ff5429]'>Zen</span>
                    </h1>
                    <p className='hidden md:flex text-xs sm:text-sm text-gray-500 font-medium tracking-wider whitespace-nowrap'>
                        FIND YOUR DREAM JOB
                    </p>
                </Link>

                {
                    user && <AvatarComponent />
                }
            </div>


            {
                !user &&
                <div className='w-full md:w-125 flex justify-center'>
                    <SearchField name="search" className="w-full max-w-md md:max-w-125">
                        <SearchField.Group className="bg-[#f2faff] rounded-md h-12 border border-[#004f6e] flex items-center px-3 w-full transition-shadow focus-within:ring-2 focus-within:ring-[#004f6e]/20">
                            <SearchField.SearchIcon className="text-[#004f6e] shrink-0" />
                            <SearchField.Input
                                className="w-full bg-transparent pl-2 focus:outline-none text-sm"
                                placeholder="Search jobs, companies..."
                            />
                            <SearchField.ClearButton className="shrink-0" />
                        </SearchField.Group>
                    </SearchField>
                </div>
            }
        </nav>
    );
};

export default PublicNavbar;