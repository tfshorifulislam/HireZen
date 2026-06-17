'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturingJobs = () => {
    const jobs = [
        { id: 1, title: "Senior Retail Planner", type: "Hybrid Remote Work", time: "Full-Time", location: "San Francisco, CA" },
        { id: 2, title: "Procurement Manager", type: "100% Remote Work", time: "Full-Time", location: "MA, NH, NC" },
        { id: 3, title: "Education Recruiter", type: "100% Remote Work", time: "Full-Time", location: "MS" },
        { id: 4, title: "Microsoft Dynamics 365 Expert", type: "Hybrid Remote Work", time: "Full-Time", location: "Richmond, IN" },
        { id: 5, title: "Commercial Contracts Lawyer", type: "100% Remote Work", time: "Part-Time", location: "Melbourne, Australia" },
        { id: 6, title: "Channel Analyst", type: "Hybrid Remote Work", time: "Full-Time", location: "Arlington, VA" },
        { id: 7, title: "Frontend Developer", type: "Remote", time: "Full-Time", location: "Dhaka, Bangladesh" },
        { id: 8, title: "UI/UX Designer", type: "Remote", time: "Full-Time", location: "London, UK" },
        { id: 9, title: "Backend Engineer", type: "Hybrid", time: "Full-Time", location: "Berlin, Germany" },
        { id: 10, title: "DevOps Engineer", type: "Remote", time: "Full-Time", location: "Toronto, Canada" },
        { id: 11, title: "Product Manager", type: "Hybrid", time: "Full-Time", location: "New York, USA" },
        { id: 12, title: "Data Analyst", type: "Remote", time: "Contract", location: "Singapore" },
        { id: 13, title: "Software Engineer", type: "Remote", time: "Full-Time", location: "Austin, TX" },
        { id: 14, title: "QA Engineer", type: "Hybrid", time: "Full-Time", location: "Chicago, IL" },
        { id: 15, title: "Graphic Designer", type: "Remote", time: "Part-Time", location: "Sydney, Australia" },
        { id: 16, title: "Marketing Specialist", type: "Hybrid", time: "Full-Time", location: "Los Angeles, CA" },
        { id: 17, title: "SEO Executive", type: "Remote", time: "Contract", location: "Dubai, UAE" },
        { id: 18, title: "Mobile App Developer", type: "Remote", time: "Full-Time", location: "Tokyo, Japan" }
    ];

    const jobsPerPage = 6;
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(1);

    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    const nextSlide = () => {
        setDirection(1);
        setPage((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setDirection(-1);
        setPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const visibleJobs = jobs.slice(
        page * jobsPerPage,
        page * jobsPerPage + jobsPerPage
    );


    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0
        })
    };

    return (
        <section className="max-w-7xl w-11/12 mx-auto py-12 md:py-16 overflow-hidden">
            {/* Header */}
            <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004f6e] tracking-tight">
                    Featuring{' '}
                    <span className="border-b-4 border-[#ff5429] pb-1">
                        210k+
                    </span>{' '}
                    Flexible & Online Jobs
                </h2>
            </div>

            {/* Slider Content Wrapper */}
            <div className="flex items-center gap-4 relative">

                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="hidden md:flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 hover:bg-gray-50 active:scale-95 transition cursor-pointer flex-shrink-0 z-10"
                >
                    <ChevronLeft className="w-5 h-5 text-[#004f6e]" />
                </button>

                {/* Animated Viewport */}
                <div className="flex-1 overflow-hidden relative min-h-110 md:min-h-105 px-2">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "tween", ease: "easeInOut", duration: 0.6 },
                                opacity: { duration: 0.45 }
                            }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                        >
                            {visibleJobs.map((job) => (
                                <div
                                    key={job.id}
                                    className="bg-white border border-gray-100 rounded-md p-6 flex flex-col justify-between h-48 hover:shadow-lg hover:border-gray-200 transition-shadow duration-300"
                                >
                                    {/* Top Metadata */}
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-gray-400 font-medium">Today</span>
                                        <span className="text-xs text-[#ff5429] font-bold uppercase tracking-wider">New!</span>
                                    </div>

                                    {/* Job Title */}
                                    <h3 className="text-base md:text-lg font-bold text-[#004f6e] line-clamp-2 leading-snug">
                                        {job.title}
                                    </h3>

                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs px-3 py-1 bg-[#f2faff] text-[#004f6e] rounded-full font-medium">
                                            {job.type}
                                        </span>
                                        <span className="text-xs px-3 py-1 bg-[#f2faff] text-[#004f6e] rounded-full font-medium">
                                            {job.time}
                                        </span>
                                    </div>

                                    {/* Location Info */}
                                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 truncate">
                                        <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                                        <span className="truncate">{job.location}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="hidden md:flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 hover:bg-gray-50 active:scale-95 transition cursor-pointer flex-shrink-0 z-10"
                >
                    <ChevronRight className="w-5 h-5 text-[#004f6e]" />
                </button>
            </div>

            {/* Mobile Touch Arrows */}
            <div className="flex justify-center gap-4 mt-8 md:hidden">
                <button
                    onClick={prevSlide}
                    className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 active:bg-gray-100"
                >
                    <ChevronLeft className="w-5 h-5 text-[#004f6e]" />
                </button>

                <button
                    onClick={nextSlide}
                    className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 active:bg-gray-100"
                >
                    <ChevronRight className="w-5 h-5 text-[#004f6e]" />
                </button>
            </div>

            {/* Bottom Navigation Indicators (Dots) */}
            <div className="flex justify-center gap-2 mt-8">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > page ? 1 : -1);
                            setPage(index);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${page === index
                                ? 'w-8 bg-[#ff5429]'
                                : 'w-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeaturingJobs;