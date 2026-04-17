import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../assets/logo.png"
import { AuthContext } from '../../Layout/AuthContext/AuthContext';

const Navbar = () => {

    const { user, signedOut } = use(AuthContext)

    const list = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menulist">Menu List</NavLink></li>
        {user && <>
            <li><NavLink to="/orderedlist">Ordered Food</NavLink></li>
        </>}
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
    </>
    const handleSignOut = () => {
        signedOut()
            .then()
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="navbar bg-linear-to-l from-blue-400 to-indigo-300 text-gray-900 shadow-sm px-0 md:px-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-linear-to-l from-emerald-400 to-indigo-300 text-gray-900
                        rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {list}
                    </ul>
                </div>
                <img src={logo} className='w-14 h-14 rounded-full' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {list}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <button onClick={handleSignOut} className='btn btn-success'>Log Out</button>
                    :
                    <Link to="/login"><button className='btn bnt-soft btn-success'>Log In</button></Link>}
            </div>
        </div>
    );
};

export default Navbar;