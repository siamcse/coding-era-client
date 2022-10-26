import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h2 className='text-2xl text-center text-red-600'>Page Not Found!!</h2>
            <h1 className='text-4xl text-center text-red-600'>Error!!</h1>
            <img src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif" alt="" />
            <Link to='/'><button className='btn bg-emerald-600 hover:bg-emerald-800'>Back to Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;