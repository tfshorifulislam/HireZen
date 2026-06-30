import Sidebar from '@/components/ProtectedRouteComponent/Sidebar';
import React from 'react';

const ProtectedLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar/>
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
};

export default ProtectedLayout;