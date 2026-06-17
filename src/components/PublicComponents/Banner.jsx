import React from 'react';
import { Button } from "@heroui/react";
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden">


            <div className="flex flex-col space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004f6e] leading-tight max-w-xl mx-auto md:mx-0">
                    The <span className="text-[#ff5429]">#1 Job Site</span> to Find Work From Home Jobs. No Ads, Scams, or Junk
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal max-w-lg mx-auto md:mx-0">
                    Find legitimate work-from-home jobs with options for flexible hours and hybrid work.
                </p>

                <div className="pt-2">
                    <Button
                        className="bg-[#ff5429] text-white font-bold px-8 py-6 text-base sm:text-lg rounded-md  sm:w-auto hover:bg-[#e04822] shadow-md "
                    >
                        Find Your Next WFH Job!
                    </Button>
                </div>
            </div>

            <div className="relative flex justify-center items-center order-1 md:order-2 w-11/12 max-w-md sm:max-w-lg md:max-w-none mx-auto">
                {/* Decorative background shapes mimicking the image context */}
                <div className="absolute inset-0 bg-[#f2faff] rounded-full filter blur-2xl opacity-70 -z-10 scale-95" />

                <Image
                    width={500}
                    height={500}
                    src="/banner.jpg"
                    alt="Woman working comfortably from home on her laptop with a coffee mug"
                    className="w-full h-auto object-contain dynamic-image-glow"
                />
            </div>

        </section>
    );
};

export default Banner;