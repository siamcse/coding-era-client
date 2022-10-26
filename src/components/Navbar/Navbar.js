import React from 'react';
import ToggleButton from 'react-toggle-button'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    const [value, setValue] = useState(false);
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-black w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            {
                                user ?
                                    <li>
                                        <div>
                                            <img className='w-9 rounded-full' src={user?.photoURL} alt='' title={user?.displayName} />
                                            <p>{user?.displayName}</p>
                                        </div>
                                        <button onClick={handleLogOut} className="btn">Log Out</button>
                                    </li>
                                    :
                                    <Link to='/login' className="btn">Login</Link>
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Coding Era</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                            user ?
                                <li className='flex items-center'>
                                    <button onClick={handleLogOut} className="btn">Log Out</button>
                                    <div>
                                        <img className='w-9 rounded-full' src={user?.photoURL} alt='' title={user?.displayName} />
                                    </div>
                                </li>
                                :
                                <Link to='/login' className="btn">Login</Link>
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