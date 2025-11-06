import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const NavBar = () => {
    const { user, LogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged Out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Error occured when logging out",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div className="navbar bg-base-100 h-30 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allVolunterNeed'>All Volunter Need Posts</Link></li>
                        <li><Link to='/addVolunteer'>Add Volunteer Need Post</Link></li>
                        
                        

                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl">Al Jazeera</a>
            </div>
            <div className="navbar-center gap-5 hidden lg:flex">
                <ul className="menu gap-5 menu-horizontal px-1">
                    <Link to='/'>Home</Link>
                    <Link to='/allVolunterNeed'>All Volunteer Need Posts</Link>
                    <Link to='/addVolunteer'>Add Volunteer Need Post</Link>
                    
                </ul>
            </div>
            {
                user ? <div className='navbar-end p-2 gap-3 cursor-pointer '>
                    <div className='dropdown dropdown-end'>
                        <div tabIndex={0} role='button' className='btn btn-ghost m-1'>
                            <button className='btn'>My Profile</button>
                        </div>

                        <ul tableIndex={0} className='dropdown-content menu bg-base-100 rounded-box w-52  p-2 shadow'>
                            <li>
                                <Link>Add volunteer</Link>
                            </li>
                            <li>
                                <Link to='/managePosts'>Manage My Posts</Link>
                            </li>

                        </ul>
                    </div>
                    <div className='flex tooltip tooltip-bottom' data-tip={user.displayName || 'No Name'}><img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                        <Link onClick={handleLogOut} className='btn'>LogOut</Link>
                    </div>
                </div> : (
                    <div className="navbar-end">
                        <Link className='btn btn-primary' to='/login'>Login</Link>
                        <Link className='btn btn-primary' to='register'>Register</Link>
                    </div>
                )
            }
        </div>
    );
};

export default NavBar;