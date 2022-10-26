import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, title, description, image } = course;
    return (
        <div>
            <div className="card card-compact w-full h-96 bg-base-100 shadow-xl">
                <figure><img data-aos="zoom-in" className='h-40' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>
                        {description.length > 100 ?
                            <>{description.slice(0, 100) + "..."}</>
                            :
                            { description }
                        }
                    </p>
                    <div className="card-actions">
                        <Link to={`/course/${id}`}>
                            <button className="btn bg-teal-600 btn-sm w-full absolute bottom-0 hover:bg-teal-800 hover:translate-x-1 hover:scale-1200">
                                Details
                                <FaArrowRight className='ml-2 transition ease-in-out delay-150 ' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;