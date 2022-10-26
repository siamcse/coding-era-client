import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FcCheckmark } from "react-icons/fc";
import { FaLink } from "react-icons/fa";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    const course = useLoaderData();
    const ref = createRef();
    const { id, title, description, learnItem, image } = course;
    console.log(course);
    return (
        <div className='lg:w-2/4 mx-auto'>  
            <div className="hero min-h-screen bg-base-100 shadow-xl mb-6">
                <div ref={ref} className="hero-content flex-col">
                    <h1 className="text-2xl lg:text-5xl font-bold mt-4">{title}</h1>
                    <img src={image} className="rounded-lg shadow-2xl" alt='' />
                    <div>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button className='flex gap-2 items-center right-96 top-16 absolute btn text-black bg-transparent btn-sm mt-2' onClick={toPdf}><FaLink/>PDF Download</button>}
                        </Pdf>
                        
                        <p className="py-6">{description}</p>
                        <h3 className='text-3xl font-semibold my-3'>What will you learn?</h3>
                        <ul>
                            {
                                learnItem.map((item,indx) => <li className='flex items-start' key={indx}>
                                    <FcCheckmark className='border-2 border-green-600 rounded-full mr-3'/>
                                    {item}</li>)
                            }
                        </ul>
                        <Link to={`/checkout/${id}`}><button className="btn bg-emerald-500 my-6 hover:bg-emerald-800">Get Premium Access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;