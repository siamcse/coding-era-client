import { Box, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const CheckOut = () => {
    const course = useLoaderData();
    const { user } = useContext(AuthContext);

    const { price, rating, title, image } = course;

    const steps = [
        'Select Course',
        'Your Info',
        'Payment',
    ];

    const proceedPayment = () => {
        toast.error("Proceed is under construction!");
    }
    return (
        <div className='my-10'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={2} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <div className='w-3/4 mx-auto mt-16 lg:grid grid-cols-3 gap-4'>
                <div className='col-span-2'>
                    <h2 className='text-xl'>Complete Course Payment</h2>
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="flex flex-col lg:flex-row">
                                <figure><img className='lg:h-16' src={image} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{title}</h2>

                                </div>
                            </div>
                            <div className='border-t-2'></div>
                            <div className='w-3/4 ml-8 pb-6'>
                                <h3 className='text-xl'>Payment Details</h3>
                                <div className='flex justify-between '>
                                    <p>Course Price</p>
                                    <p>Tk.{price}</p>
                                </div>
                                <div className='flex justify-between '>
                                    <p>Discount (15%)</p>
                                    <p>Tk. {price*15/100}</p>
                                </div>
                                <div className='flex justify-between '>
                                    <p>Total Payment</p>
                                    <p>Tk. {price - price * 15 / 100}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card bg-base-100 md:w-3/4 shadow-xl pl-3 mt-6 lg:mt-0'>
                    <h2 className='text-xl'>User Info</h2>
                    <div className='flex gap-6 '>
                        <p>Name:</p>
                        <p>{user?.displayName}</p>
                    </div>
                    <div className='flex gap-6'>
                        <p>Email:</p>
                        <p>{user?.email}</p>
                    </div>
                    <div className='flex  text-lg gap-2'>
                        <p>Total Payment:</p>
                        <p>Tk. {price - price * 15 / 100}</p>
                    </div>
                    <button onClick={proceedPayment} className='btn bg-emerald-600 mt-3 mr-3 hover:bg-emerald-800'>Proceed to Payment</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;