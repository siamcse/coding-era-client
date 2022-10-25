import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    AOS.init();
    return (
        <div className='mx-12 my-12 '>
            <h2 className='text-3xl text-center'>All Courses: {courses.length}</h2>
            <div className='grid grid-cols-3 mt-10'>
                <div data-aos="fade-up-right" className='w-3/4 mx-auto min-h-screen'>
                    <h2 className='text-3xl text-center'>All Course Title</h2>
                    {
                        courses.map(course =>
                            <h4 className='p-4'>
                                {course.title}
                            </h4>)
                    }
                </div>
                <div data-aos="fade-down-left" className='col-span-2 grid grid-cols-3 gap-10'>
                    {
                        courses.map(course => <CourseCard
                            key={course.id}
                            course={course}
                        ></CourseCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Courses;