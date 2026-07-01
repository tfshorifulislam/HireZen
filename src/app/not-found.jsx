import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            
            <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

            <p className="mt-4 text-xl text-gray-600">
                Page Not Found
            </p>

            <p className="mt-2 text-sm text-gray-400 text-center">
                The page you are looking for doesn’t exist or has been moved.
            </p>

            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-[#060b30] text-white rounded-lg hover:bg-[#060b30]transition"
            >
                Go Back Home
            </Link>

        </div>
    );
};

export default NotFoundPage;