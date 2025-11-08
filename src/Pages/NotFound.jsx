import React from 'react';
import { Link, useRouteError } from 'react-router';

const NotFound = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-2xl text-gray-600 mb-6">
                {error?.statusText || error?.message || 'Page Not Found'}
            </p>
            <Link to="/">
                <button className="btn btn-primary">Go Back Home</button>
            </Link>
        </div>
    );
};

export default NotFound;