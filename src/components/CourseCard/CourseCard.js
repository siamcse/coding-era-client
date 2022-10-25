import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CourseCard = ({ course }) => {
    const { id, title, description, image } = course;
    return (
        <div>
            <div className="card card-compact w-full h-96 bg-base-100 shadow-xl">
                <figure><img className='h-40' src={image} alt="Shoes" /></figure>
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
                        <button className="btn btn-primary btn-sm w-full absolute bottom-0 ">
                            Details
                            <FaArrowRight className='ml-2'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;