import React from 'react';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="font-bold mb-4">404 | Page Not Found</h1>
            <img src="/pagenotfound.png" alt="page-not-found" className="max-w-xs mx-auto" />
        </div>
    );
};

export default PageNotFound;
