import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    AOS.init();
    return (
        <div className='md:mx-12 my-12 '>
            <h2 className='text-3xl text-center'>All Courses: {courses.length}</h2>
            <div className='md:grid md:grid-cols-3 mt-10'>
                <div data-aos="fade-right" className='md:w-3/4 bg-base-100 rounded-lg mx-auto lg:min-h-screen overflow-hidden'>
                    <h2 className='text-3xl text-center'>Course Title</h2>
                    {
                        courses.map(course =>
                            <li
                                className='p-2 text-emerald-600 md:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-md'
                                key={course.id}>
                                <Link to={`/course/${course.id}`}>{course.title}</Link>
                            </li>)
                    }
                </div>
                <div data-aos="fade-left" className='col-span-2 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
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