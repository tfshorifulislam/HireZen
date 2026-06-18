import React from 'react';

const NotFoundPage = () => {
    return (
        <div style={{ 
            display: 'flex', 
            height: '100vh', 
            justifyContent: 'center', 
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h1>404</h1>
            <p>Page Not Found</p>
        </div>
    );
};

export default NotFoundPage;