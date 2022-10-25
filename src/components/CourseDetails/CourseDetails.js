import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { title, description, learnItem, image } = course;
    console.log(course);
    return (
        <div className='lg:w-3/4 mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-md rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <h3 className='text-3xl font-semibold'>What will you learn?</h3>
                        {
                            learnItem.map(item=> <li>{item}</li>)
                        }
                        <button className="btn btn-primary py-6">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;