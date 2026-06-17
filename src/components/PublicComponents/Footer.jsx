import React from 'react';

const PublicFooter = () => {
    const col1Links = [
        "New Remote Jobs Hiring Now",
        "Remote Jobs Near Me",
        "Part-Time Remote Jobs",
        "Entry Level Remote Jobs",
        "Freelance Remote Jobs",
        "Browse Remote Jobs by Category",
        "Browse Top Work from Home Jobs",
        "Full-Time Remote Jobs",
        "Temporary Remote Jobs",
        "Work from Anywhere Jobs"
    ];

    const col2Links = [
        "HireZen Reviews",
        "How HireZen Works",
        "Our Team",
        "HireZen Pricing",
        "Press & Awards",
        "Careers at HireZen",
        "HireZen App",
        "Affiliate Program",
        "Editorial Process and Methodology",
        "Contact Us",
        "Fraud Awareness"
    ];

    const col3Links = [
        "Work from Home Jobs No Experience",
        "How To Make Money Online",
        "Weekend Jobs",
        "Side Hustle Jobs from Home",
        "High Paying Remote Jobs",
        "Best Remote Companies to Work For",
        "Informational Guides",
        "ExpertApply: Auto-Apply for Jobs",
        "Online Resume Builder",
        "Remote Work Statistics & Trends"
    ];

    return (
        <footer className="w-11/12 mx-auto  text-gray-700 border-t border-gray-200 mt-16 py-12 md:py-16">
            
            <div className="w-11/12 max-w-5xl mx-auto flex flex-col sm:flex-row sm:gap-10 md:gap-12 space-y-10 text-left justify-center">
                
                {/* Column 1 */}
                <div className="flex flex-col space-y-3">
                    <h3 className="font-bold text-[#004f6e] text-base md:text-lg mb-2">
                        Find Remote Work From Home & Flexible Jobs
                    </h3>
                    <ul className="flex flex-col space-y-2.5">
                        {col1Links.map((link, idx) => (
                            <li key={idx}>
                                <a href="#" className="text-sm text-gray-600 hover:text-[#ff5429] hover:underline transition-all duration-200">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col space-y-3 sm:pl-4 md:pl-0">
                    <h3 className="font-bold text-[#004f6e] text-base md:text-lg mb-2">
                        About HireZen
                    </h3>
                    <ul className="flex flex-col space-y-2.5">
                        {col2Links.map((link, idx) => (
                            <li key={idx}>
                                <a href="#" className="text-sm text-gray-600 hover:text-[#ff5429] hover:underline transition-all duration-200">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col space-y-3 sm:col-span-2 md:col-span-1 md:pl-0">
                    <h3 className="font-bold text-[#004f6e] text-base md:text-lg mb-2">
                        Job Search Resources
                    </h3>
                    <ul className="flex flex-col space-y-2.5">
                        {col3Links.map((link, idx) => (
                            <li key={idx}>
                                <a href="#" className="text-sm text-gray-600 hover:text-[#ff5429] hover:underline transition-all duration-200">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Bottom Copyright Bar */}
            <div className="w-11/12 mx-auto border-t border-gray-200 mt-12 pt-6 text-center text-xs text-gray-400">
                &copy; {new Date().getFullYear()} HireZen. All rights reserved.
            </div>
        </footer>
    );
};

export default PublicFooter;