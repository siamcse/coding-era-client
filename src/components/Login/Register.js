import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const { createUser, profileUpdate } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        setError('');

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Registration Successfull.'
                })
                profileUpdate({
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => { })
                    .catch(e => {
                        console.error(e);
                        setError(e.message);
                    })
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            });

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Register!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="input-group flex flex-col md:flex-row">
                                <span className="label-text pr-4">Full Name</span>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group flex flex-col md:flex-row">
                                <span className="label-text">Photo URL</span>
                                <input type="text" name='photourl' placeholder="Photo URL" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group flex flex-col md:flex-row">
                                <span className="label-text pr-12">Email</span>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group flex flex-col md:flex-row">
                                <span className="label-text pr-6">Password</span>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </label>
                        </div>
                        {
                            error && <p className='text-red-700'>{error}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn bg-emerald-600 hover:bg-emerald-800">Register</button>
                        </div>
                        <p>Already have an account? <Link to='/login' className='text-blue-700 underline'>Please Login</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;