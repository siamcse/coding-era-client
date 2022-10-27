import React from 'react';
import ToggleButton from 'react-toggle-button'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
    const [value, setValue] = useState(false);
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfull!");
            })
            .catch(e => console.error(e))
    }

    const activeClassName = "bg-gray-300 md:bg-gray-800";
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-black w-52">
                            <li><NavLink
                                to="home"
                                className={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                                }
                            >
                                Home
                            </NavLink></li>
                            <li><NavLink
                                to='/courses'
                                className={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                                }
                            >
                                Courses
                            </NavLink></li>
                            <li><NavLink
                                to='/faq'
                                className={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                                }
                            >
                                FAQ
                            </NavLink></li>
                            <li><NavLink
                                to='/blog'
                                className={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                                }
                            >
                                Blog
                            </NavLink></li>
                            {
                                user ?
                                    <li>
                                        <div>
                                            {
                                                user?.photoURL ? <img className='w-9 rounded-full' src={user?.photoURL} alt='' title={user?.displayName} /> : <FaUserAlt title={user?.displayName}></FaUserAlt>
                                            }
                                            <p>{user?.displayName}</p>
                                        </div>
                                        <button onClick={handleLogOut} className="btn">Log Out</button>
                                    </li>
                                    :
                                    <li><NavLink to='/login' className={({ isActive }) =>
                                        isActive ? activeClassName : undefined
                                    }>Login</NavLink></li>
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn  normal-case"><img className='w-32 md:w-48' src="/coding-era.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink
                            to="home"
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }
                        >
                            Home
                        </NavLink></li>
                        <li><NavLink
                            to='/courses'
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }
                        >
                            Courses
                        </NavLink></li>
                        <li><NavLink
                            to='/faq'
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }
                        >
                            FAQ
                        </NavLink></li>
                        <li><NavLink
                            to='/blog'
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }
                        >
                            Blog
                        </NavLink></li>
                        {
                            user ?
                                <li className='flex items-center'>
                                    <button onClick={handleLogOut} className="btn">Log Out</button>
                                    <div>
                                        {
                                            user?.photoURL ? <img className='w-9 rounded-full' src={user?.photoURL} alt='' title={user?.displayName} /> : <FaUserAlt title={user?.displayName}></FaUserAlt>
                                        }
                                    </div>
                                </li>
                                :
                                <li><NavLink to='/login' className={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                                }>Login</NavLink></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <p className='mr-2'><span className='hidden lg:block'>Dark Mode:</span></p>
                    <ToggleButton
                        value={value || false}
                        onToggle={(value) => {
                            setValue(!value)
                        }} />


                </div>
            </div>
        </div>
    );
};

export default Navbar;