import React from 'react';

const JobSeekerBanner = () => {
    return (
        <section className="w-full bg-[#008cb4] relative overflow-hidden py-16 md:py-20 text-white text-center px-4">
            {/* Background SVG Doodle Pattern to match image_a689b6.png */}
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="doodle-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
                            {/* Laptop/Screen Outline */}
                            <path d="M20 20h20v14H20z M16 34h28" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            {/* Briefcase Outline */}
                            <path d="M70 20h16v12H70z M74 20v-4h8v4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            {/* Magnifying Glass */}
                            <circle cx="30" cy="80" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            <path d="M34 84l6 6" stroke="currentColor" strokeWidth="1.5" />
                            {/* Location Pin */}
                            <path d="M85 75c0-4 3-7 7-7s7 3 7 7c0 4-7 11-7 11s-7-7-7-11z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            {/* Random abstract wavy lines */}
                            <path d="M10 110q15-10 30 0t30 0" stroke="currentColor" strokeWidth="1" fill="none" />
                            <path d="M60 50q10 10 20-10" stroke="currentColor" strokeWidth="1" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#doodle-pattern)" />
                </svg>
            </div>

         
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                
             
                <div className="mb-4 text-[#ffb100] animate-pulse">
                    <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" />
                        <path d="M19 13l1 2 2 .3-1.5 1.4.4 2-1.9-1-1.9 1 .4-2-1.5-1.4 2-.3z" className="opacity-80" />
                    </svg>
                </div>

             
                <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-bold tracking-tight text-white leading-tight max-w-3xl mb-8">
                    Over{' '}
                    <span className="relative inline-block px-1">
                        1 Million
                     
                        <svg className="absolute left-0 -bottom-2 w-full h-2 text-[#ff5429]" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                        </svg>
                    </span>{' '}
                    Job Seekers Have Used <span className="text-white">HireZen</span> to Find a Better Way to Work
                </h2>

           
                <button className="bg-[#ff5429] hover:bg-[#e0431b] text-white font-bold text-base md:text-lg px-8 py-3.5 rounded-md shadow-md hover:shadow-lg active:scale-98 transition-all duration-200 cursor-pointer">
                    Find Your Next Remote Job!
                </button>

            </div>
        </section>
    );
};

export default JobSeekerBanner;