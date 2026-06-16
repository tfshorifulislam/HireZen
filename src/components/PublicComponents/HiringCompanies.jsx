import React from 'react';
import Marquee from 'react-fast-marquee';

const HiringCompanies = () => {
    const companies = [
        'DoorDash',
        'Amazon',
        'Citizens',
        'Google',
        'Kaplan',
        'Toast',
        'Reddit',
        'Pearson',
        'HubSpot',
        'Spotify',
        'Netflix',
        'Dropbox',
        'Peloton',
        'CVS Health',
        'Progressive',
    ];

    return (
        <div className="w-full py-8 md:py-12 bg-gray-50/50 border-y border-gray-100">
           
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#004f6e] text-center px-4 mb-6 md:mb-10 tracking-tight">
                Awesome Companies Hiring for Work-From-Home Jobs*
            </h2>

         
            <Marquee 
                gradient={true} 
                gradientColor="#fafafa" 
                gradientWidth={60}
                speed={100} 
                pauseOnHover={true}
                className="overflow-hidden"
            >
                {companies.map((company, i) => (
                    <div 
                        key={i} 
                        className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 hover:text-[#004f6e] px-6 sm:px-10 md:px-14 tracking-wider uppercase transition-colors duration-300 select-none"
                    >
                        {company}
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default HiringCompanies;