import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CreateContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';



const Navbar = () => {
    const { user, logOut, theme, toggleTheme } = useContext(CreateContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                swal("Successful Log out", "Welcome To Our Community", "success");
            })
            .catch(() => {
                swal("Something Wrong!", "Please try again", "error");
            })
    }


    const liNave = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allArtAndCraftItems'>AllArt &craft Items</NavLink></li>
        <li><NavLink to='/addCraftItem'>Add Craft Item</NavLink></li>
        <li><NavLink to={`/myArtAndCraftList/${user?.email ? user.email : user?.uid}`}>My Art & Craft List</NavLink></li>
    </>

    const [text] = useTypewriter({
        words: ['Stone Crafter'],
        loop: 0
    })

    return (
        <div className="container mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* LINK top */}
                            {liNave}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold">
                        <div className='App'>
                            <span>{text}</span>
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* LINK top */}
                        {liNave}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="swap swap-rotate mr-4">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                    <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full my-anchor-element">
                                <img alt="Tailwind CSS Navbar component" src={user ? user?.photoURL : 'https://i.ibb.co/fkkgHcK/OIP.jpg'} />
                            </div>
                        </div>
                    </div>
                    <div className="ml-5">
                        {
                            user ?
                                <div className="tooltip tooltip-bottom" data-tip="hello">
                                    <NavLink><button onClick={handleLogOut} className="btn">Logout</button></NavLink>
                                </div>
                                : <div className="flex flex-col md:flex-row">
                                    <NavLink to='/login'><button className="btn mr-3 w-full mb-2 md:mb-0">Login</button></NavLink>
                                    <NavLink to='/register'><button className="btn w-full">Register</button></NavLink>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;