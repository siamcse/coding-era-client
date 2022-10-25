import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcCheckmark } from "react-icons/fc";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    const course = useLoaderData();
    const ref = React.createRef();
    const { title, description, learnItem, image } = course;
    console.log(course);
    return (
        <div className='lg:w-3/4 mx-auto'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            <div className="hero min-h-screen bg-base-200">
                <div ref={ref} className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-md rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <h3 className='text-3xl font-semibold my-3'>What will you learn?</h3>
                        <ul>
                            {
                                learnItem.map(item => <li className='flex items-start'>
                                    <FcCheckmark className='border-2 border-green-600 rounded-full mr-3'/>
                                    {item}</li>)
                            }
                        </ul>
                        <button className="btn btn-primary my-6">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;