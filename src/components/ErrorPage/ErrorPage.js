import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h2 className='text-5xl'>Error 404!!!</h2>
            <Link to='/'><button className='btn btn-ghost'>Back to Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;