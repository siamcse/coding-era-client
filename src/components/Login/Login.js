import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { signIn, popupSignIn, resetPassword } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Logged in Successfully'
                })
                navigate(from, { replace: true });
            })
            .catch(e => setError(e.message));

    }

    const handleGoogleSignIn = () => {
        setError('');
        popupSignIn(googleProvider)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Logged in Successfully'
                })
                navigate(from, { replace: true });
            })
            .catch(e => setError(e.message))
    }
    const handleGithubSignIn = () => {
        setError('');
        popupSignIn(githubProvider)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Logged in Successfully'
                })
                navigate(from, { replace: true });
            })
            .catch(e => setError(e.message))
    }
    const handleEmail = (event)=>{
        const email = event.target.value;
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            setEmail(email);
            setError('');
        }
        else{
            setEmail('');
            setError('Please Enter a valid email.')
        }
    }
    const handleResetPassword=()=>{
        resetPassword(email)
        .then(()=>{
            toast.success("Password reset link successfully sent to your email.")
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className='input-group flex flex-col md:flex-row'>
                                <span className='pr-10'>Email</span>
                                <input onBlur={handleEmail} type="text" name='email' placeholder="email" className="input input-bordered" required/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className='input-group flex flex-col md:flex-row '>
                                <span>Password</span>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </label>
                            <label className="label">
                                <Link onClick={handleResetPassword} className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        {
                            error && <p className='text-red-700'>{error}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn bg-emerald-600 hover:bg-emerald-800">Login</button>
                        </div>
                        <p>Are you a new user? <Link to='/register' className='text-blue-700 underline'>Please Register</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <div className="card-body">
                        <button onClick={handleGoogleSignIn} className='flex items-center mx-auto p-4 rounded-md border text-white bg-emerald-600 hover:bg-emerald-800'>
                            <FaGoogle className='mr-2' />
                            Continue with Google
                        </button>
                        <button onClick={handleGithubSignIn} className='flex items-center mx-auto p-4 rounded-md border text-white bg-emerald-600 hover:bg-emerald-800'>
                            <FaGithub className='mr-2' />
                            Continue with Github
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;