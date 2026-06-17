import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const HowDifferentHireZen = () => {
    const features = [
        {
            title: "Higher-Quality WFH Job Listings",
            description: "Only legit online jobs. No ads, scams, or junk to sift through. Our team spends 200+ hours/day verifying every online job."
        },
        {
            title: "Unlimited Job Search Resources",
            description: "Full access to all features, including unlimited online jobs, articles, and webinars to help you with your remote job search."
        },
        {
            title: "Save Time",
            description: "Go straight from online job listings to applications. No more hopping from one job board to the next to find jobs from home."
        }
    ];

    return (
        <section className="w-11/12 max-w-6xl mx-auto py-16 md:py-24">
            {/* Header section with custom underline */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004f6e] tracking-tight">
                    How HireZen is{' '}
                    <span className="relative inline-block">
                        Different
                        {/* Custom vector underline mimicking the image */}
                        <svg className="absolute left-0 bottom-[-8px] w-full h-2 text-[#ff5429]" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                        </svg>
                    </span>
                </h2>
            </div>

           
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
            
                <div className="lg:col-span-7 flex flex-col space-y-8 order-2 lg:order-1">
                    <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-4 items-start">
                               
                                <CheckCircle2 className="w-6 h-6 text-[#008cb4] flex-shrink-0 mt-0.5" />
                                
                                <div className="space-y-1.5">
                                    <h3 className="text-base md:text-lg font-bold text-[#004f6e]">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action Button */}
                    <div className="pt-4 text-center lg:text-left">
                        <button className="w-full sm:w-auto bg-[#ff5429] hover:bg-[#e0431b] text-white font-bold text-base px-10 py-3.5 rounded-md shadow-md hover:shadow-lg active:scale-98 transition-all duration-200 cursor-pointer">
                            Get Started
                        </button>
                    </div>
                </div>

               
                <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                    <div className="relative w-70 h-70 sm:w-85 sm:h-85 md:w-95 md:h-95">
                       
                        <div className="absolute inset-0 bg-[#008cb4] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] opacity-90 "></div>
                        
                      
                        <div className="absolute inset-4 bg-[#f2faff] rounded-[60%_40%_30%_70%_/_50%_40%_60%_50%] opacity-20"></div>


                        <div className="absolute top-4 right-4 text-white opacity-40">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
                                <circle cx="5" cy="5" r="2" /><circle cx="20" cy="5" r="2" /><circle cx="35" cy="5" r="2" /><circle cx="50" cy="5" r="2" />
                                <circle cx="5" cy="20" r="2" /><circle cx="20" cy="20" r="2" /><circle cx="35" cy="20" r="2" /><circle cx="50" cy="20" r="2" />
                                <circle cx="5" cy="35" r="2" /><circle cx="20" cy="35" r="2" /><circle cx="35" cy="35" r="2" /><circle cx="50" cy="35" r="2" />
                                <circle cx="5" cy="50" r="2" /><circle cx="20" cy="50" r="2" /><circle cx="35" cy="50" r="2" /><circle cx="50" cy="50" r="2" />
                            </svg>
                        </div>

                     
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            <svg className="w-4/5 h-4/5 text-white drop-shadow-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="currentColor" fillOpacity="0.1" strokeWidth="1.5"/>
                                <line x1="2" y1="20" x2="22" y2="20" strokeWidth="2"/>
                                <line x1="12" y1="17" x2="12" y2="20" strokeWidth="1.5"/>
                                {/* Coding lines icon inside the mock screen */}
                                <path d="M6 7h8M6 10h5M6 13h7" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowDifferentHireZen;